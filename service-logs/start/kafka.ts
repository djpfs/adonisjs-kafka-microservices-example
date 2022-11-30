
import Kafka from '@ioc:Message/Kafka'

Kafka.on('users', async (data: any, commit: any) => {
    console.log(data)
    commit()
    // commit(false);
})
