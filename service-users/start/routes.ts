
import Route from '@ioc:Adonis/Core/Route'

Route.get('/', async () => {
  return 'Service Users'
})

Route.get('/:id', 'UserController.show')
