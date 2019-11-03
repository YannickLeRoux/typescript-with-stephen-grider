import 'reflect-metadata';
import { AppRouter } from '../../AppRouter';

export function controller(pathPrefix: string) {
  return function(target: Function) {
    const router = AppRouter.getInstance();
    for (let key in target.prototype) {
      const routeHandler = target.prototype[key]; // refers to the method in loginController
      const path = Reflect.getMetadata('path', target.prototype, key);

      if (path) {
        router.get(`${pathPrefix}${path}`, routeHandler);
      }
    }
  };
}
