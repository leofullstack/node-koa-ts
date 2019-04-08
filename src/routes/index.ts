import Router from 'koa-router'
import HomeRoutes from './homeRoutes'
import ApiRoute from './apiRoute'

export interface AppRoute {
  Path: string
  Method: string
  Action: Function
}

class Routes {
  public Router: Router

  public constructor (apiRoutes: ApiRoute[]) {
    this.Router = new Router({ prefix: '/api' })

    apiRoutes.forEach(this.BuildControllerRoutes.bind(this))
  }

  private BuildControllerRoutes (controllerRoutes: ApiRoute) : void {
    controllerRoutes.GetRoutes().forEach((route): void => {
      this.AddRoute(controllerRoutes.BaseRoute, route)
    })
  }

  private AddRoute (baseRoute: string, route: AppRoute) : void {
    this.Router[route.Method](`${(baseRoute !== '' ? '/' : '')}${baseRoute}${route.Path}`, route.Action)
  }
}

export default new Routes([
  HomeRoutes
]).Router
