import * as angular from 'angular';
import * as angularr from "angular-route";

import {HomeService} from './homeService';
import {HomeComponent} from './home/home';
import {FruitListComponent} from './fruit/fruit-list';

var fruitStore = angular.module("fruitStore", ["ngRoute"]);

fruitStore.config(["$routeProvider","$locationProvider",
    ($routeProvider: angular.route.IRouteProvider, $locationProvider:any) => {
        $locationProvider.html5Mode(true);
        $routeProvider
        .when("/", { template: "<home></home>" })
        .when("/fruit", { template: "<fruit-list></fruit-list>"})
        .when("/veg", { template: "<veg></veg>"})
        .otherwise({ redirectTo: "/" });
}]);

angular.module("fruitStore").service("homeService", HomeService);
angular.module("fruitStore").component("home", new HomeComponent());
angular.module("fruitStore").component("fruitList", new FruitListComponent());

import { downgradeComponent } from '@angular/upgrade/static';
import {VegComponent} from './veg/veg';
angular.module('fruitStore')
.directive(
  'veg',
  downgradeComponent({ component: VegComponent }) as angular.IDirectiveFactory
);
//angular.bootstrap(document.body, ['fruitStore'], { strictDi: false });

import {AppModule} from "./app.module";
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
platformBrowserDynamic().bootstrapModule(AppModule);