import {angular} from 'angular';
import {HomeService} from '../homeService';

export class HomeController {
  public message: string;
  static $inject = ["$http", "$window", "homeService"];
  constructor(private $http: angular.IHttpService, private $window: angular.IWindowService, private homeService:HomeService) {
    this.homeService.doSomething();
    this.message = "Hello from the home component";
  }
}

export class HomeComponent implements angular.IComponentOptions {
  public bindings: any;
  public controller: any;
  public template: any;

  constructor() {
    this.bindings = {};
    this.controller = HomeController;
    this.template= require('./home.html');
  }
}

