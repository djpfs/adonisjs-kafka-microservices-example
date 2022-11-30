import { Kafka, logLevel } from 'kafkajs'
import KafkaConfig from '../../config/kafka'

class Consumer {
    public config: typeof KafkaConfig
    public topics: string[]
    public events: any
    public killContainer: boolean
    public timeout: any = 0
    public consumer: any

    constructor(config: any) {
        this.config = config
        this.topics = []
        this.events = {}
        this.killContainer = false
        this.timeout = null
        this.consumer = null

        const brokers = this.config.urls ? this.config.urls.split(',') : null


        const kafka = new Kafka({
            clientId: this.config.clientId || 'local',
            brokers: brokers || [`${this.config.url}:${this.config.port}`],
            connectionTimeout: this.config.connectionTimeout || 3000,
            requestTimeout: this.config.requestTimeout || 60000,
            logLevel: this.config.logLevel || logLevel.ERROR,
        })

        this.consumer = kafka.consumer({ groupId: this.config.groupId })
    }

    public async execute({ topic, partition, message }: { topic: string, partition: string, message: any }) {
        const result = JSON.parse(message.value.toString())

        const events = this.events[topic] || []

        const promises = events.map((callback: any) => {
            return new Promise<void>((resolve) => {
                callback(result, async (commit = true) => {
                    if (this.config.autoCommit) {
                        return
                    }

                    if (commit) {
                        const offset = (Number(message.offset) + 1).toString()

                        await this.consumer.commitOffsets([{ topic, partition, offset }])
                    }

                    resolve()
                })
            })
        })

        await Promise.all(promises)
    }

    public async start() {
        await this.consumer.connect()

        await this.consumer.run({
            partitionsConsumedConcurrently: this.config.partitionsConcurrently || 1,
            autoCommit: this.config.autoCommit || false,
            eachMessage: async ({ topic, partition, message }: any) =>
                this.execute({ topic, partition, message }),
        })
    }

    public async on(topic: any, callback: any) {
        let topicArray = topic

        if (typeof topic === 'string') {
            topicArray = topic.split(',')
        }

        topicArray.forEach(async (item: any) => {
            if (!item) {
                return
            }

            const events = this.events[item] || []

            events.push(callback)

            this.events[item] = events

            this.topics.push(item)

            await this.consumer.subscribe({
                topic: item,
                fromBeginning: true,
            })
        })
    }
}

export default Consumer