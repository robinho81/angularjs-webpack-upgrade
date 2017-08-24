import {angular} from 'angular';
import {HomeService} from '../homeService';

export class FruitListController {
  public items: Fruit[];
  static $inject = ["$http", "$window", "homeService"];
  constructor(private $http: angular.IHttpService, private $window: angular.IWindowService, private homeService:HomeService) {
    this.homeService.doSomething();
    this.items = [];
    this.items.push(new Fruit("apple"));
    this.items.push(new Fruit("orange"));
    this.items.push(new Fruit("lime"));
  }
}

export class FruitListComponent implements angular.IComponentOptions {
  public bindings: any;
  public controller: any;
  public template: any;

  constructor() {
    this.bindings = {};
    this.controller = FruitListController;
    this.template = require('./fruit-list.html');
  }
}

export class Fruit {
  constructor(public name:string) {}
}
