function makeKafkaConfig(env: any) {
  return {
    enabled: env.get('KAFKA_ENABLED', false),
    clientId: env.get('KAFKA_CLIENT_ID', 'default-client'),
    groupId: env.get('KAFKA_GROUP_ID', 'default-group'),
    url: env.get('KAFKA_URL', 'localhost'),
    port: env.get('KAFKA_PORT', 9092),
    urls: env.get('KAFKA_URLS', null),
    fromBeginning: env.get('KAFKA_FROM_BEGINNING', true),
    autoCommit: false,
    partitionsConcurrently: 1,
    connectionTimeout: 3000,
    requestTimeout: 60000,
    logLevel: 1,
  }
}

export default makeKafkaConfig
