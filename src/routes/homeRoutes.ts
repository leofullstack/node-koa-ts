import { AppRoute } from '.'
import HomeController from '../controllers/homeController'
import ApiRoute from './apiRoute'

class UserRoutes implements ApiRoute {
  public BaseRoute: string = 'home';
  public GetRoutes () : AppRoute[] {
    return [{
      Path: '/',
      Method: 'get',
      Action: HomeController.Index
    }]
  }
}

export default new UserRoutes()
