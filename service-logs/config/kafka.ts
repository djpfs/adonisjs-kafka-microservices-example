import Env from '@ioc:Adonis/Core/Env'

const kafkaConfig = {
    enabled: Env.get('KAFKA_ENABLED', false),
    clientId: Env.get('KAFKA_CLIENT_ID', 'default-client'),
    groupId: Env.get('KAFKA_GROUP_ID', 'default-group'),
    url: Env.get('KAFKA_URL', 'localhost'),
    port: Env.get('KAFKA_PORT', 9092),
    urls: Env.get('KAFKA_URLS', null),
    fromBeginning: Env.get('KAFKA_FROM_BEGINNING', true),
    autoCommit: false,
    partitionsConcurrently: 1,
    connectionTimeout: 3000,
    requestTimeout: 60000,
    logLevel: 1,
}

export default kafkaConfig