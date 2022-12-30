import Kafka from "@ioc:Message/Kafka";
import { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'

export default class UserController {

    public async show({ params }: HttpContextContract) {
        await Kafka.send('users', { user_id: params.id })
        return { message: 'Message send' }
    }
}