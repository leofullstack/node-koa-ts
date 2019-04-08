import Koa from 'koa'
import cors from '@koa/cors'
import bodyParser from 'koa-bodyparser'

import Router from './routes'

class Application {
  public App: Koa

  private _port: number

  public constructor (port: number) {
    this._port = port
    this.App = new Koa()
  }

  public Start () : void {
    this.App.use(cors())
    this.App.use(bodyParser())
    this.App.use(Router.routes())
    this.App.use(Router.allowedMethods())
    this.App.listen(this._port, this.OnStart.bind(this))
    this.App.on('error', this.HandleError)
  }

  private OnStart () : void {
    console.log(`Server process: ${process.pid} listen on port ${this._port}`)
  }

  private HandleError (error: any) : void {
    console.log(`SEVERE ERROR: ${error.message}`)
  }
}

export default Application
