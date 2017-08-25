// Example of using an AngularJS service in Angular
import { HomeService } from './homeService';

export function homeServiceFactory(i: any) {
  return i.get('homeService');
}

export const homeServiceProvider = {
  provide: HomeService,
  useFactory: homeServiceFactory,
  deps: ['$injector']
};