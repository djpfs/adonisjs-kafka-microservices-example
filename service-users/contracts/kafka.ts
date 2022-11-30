declare module '@ioc:Message/Kafka' {
    import Kafka from 'providers/Kafka/kafka'

    const kafka: Kafka

    export default kafka
}