import { Context } from 'koa'

class HomeController {
  public async Index (ctx: Context) : Promise<void> {
    ctx.body = { data: 'Hello World' }
  }
}

export default new HomeController()
