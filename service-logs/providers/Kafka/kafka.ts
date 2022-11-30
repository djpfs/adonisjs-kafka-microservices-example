import Consumer from './Consumer'
import Producer from './Producer'
import { ApplicationContract } from '@ioc:Adonis/Core/Application'
import { KafkaContract } from 'Contracts/interfaces/kafka'
import kafkaConfig from 'Config/kafka'

export default class Kafka implements KafkaContract {
    public consumer!: Consumer
    public producer!: Producer
    public config
    public Logger

    constructor(Logger: any) {
        this.config = kafkaConfig
        this.Logger = Logger
    }
    protected application!: ApplicationContract


    public async start() {
        const { groupId } = this.config

        if (groupId === null || groupId === undefined || groupId === '') {
            throw new Error('You need define a group')
        }

        this.consumer = new Consumer(this.config)
        this.producer = new Producer(this.config)

        this.consumer.start().catch((e) => this.Logger.error(`[consumer] ${e.message}`, e))

        this.producer.start()
    }

    public on(topic: string, callback: any) {
        if (this.config.enabled !== 'true') return callback
        // if (this.consumer == undefined) {
        //     this.start()
        // }
        this.consumer.on(topic, callback)
    }

    public send(topic: string, data: any) {
        if (this.config.enabled !== 'true') return
        // if (this.producer == undefined) {
        //     this.start()
        // }
        return this.producer.send(topic, data)
    }

    public async disconnect() {
        await this.consumer.consumer.disconnect()
    }
}
