
import type { ApplicationContract } from '@ioc:Adonis/Core/Application'

export default class AppProvider {
  constructor(protected app: ApplicationContract) { }

  public register() {

  }

  public async boot() {

  }

  public async ready() {
  }

  public async shutdown() {


  }
}
