import { AppRoute } from '.'

export default interface ApiRoute {
  BaseRoute: string
  GetRoutes: () => AppRoute[]
}
