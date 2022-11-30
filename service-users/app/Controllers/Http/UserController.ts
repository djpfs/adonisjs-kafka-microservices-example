import Kafka from "@ioc:Message/Kafka";
import { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'

export default class UserController {

    public async show({ params }: HttpContextContract) {
        return await Kafka.send('users', { user_id: params.id })
    }
}