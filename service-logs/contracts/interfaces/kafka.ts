

export interface KafkaConfig {
    enabled: string
    clientId: string
    groupId: string
    url: string
    port: number
    urls?: string
    fromBeginning: boolean
    autoCommit: boolean
    connectionTimeout?: number
    requestTimeout?: number
    partitionsConcurrently?: number
    logLevel: any
}

export interface KafkaContract {
    start?: (...args: any[]) => void
    on?: (...args: any[]) => void
    send?: (topic: string, data: object) => void
    disconnect?: () => void
}

export * from 'kafkajs'

