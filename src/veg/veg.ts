import { Component } from '@angular/core';
import {VegService} from './veg.service';

@Component({
  selector: 'veg',
  template: '<h2>{{message}}</h2>',
  providers: [],
})
export class VegComponent {
  private message:string;

  constructor(vegService:VegService) {
    this.message = "The veg (Angular2) component ";
  }
}