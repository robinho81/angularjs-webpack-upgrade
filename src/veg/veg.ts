import { Component } from '@angular/core';
import {VegService} from './veg.service';
import {HomeService} from '../homeService';

@Component({
  selector: 'veg',
  template: '<h2>{{message}}</h2>',
  providers: [],
})
export class VegComponent {
  private message:string;

  constructor(vegService:VegService, homeService:HomeService) {
    this.message = "The veg (Angular2) component ";
    homeService.logAMessage("Hello from the Angular VegComponent");
  }
}