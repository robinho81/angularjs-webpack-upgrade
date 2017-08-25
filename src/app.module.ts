import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { UpgradeModule } from '@angular/upgrade/static';
import {VegComponent} from './veg/veg';
import {VegService} from './veg/veg.service';
import { HttpModule } from '@angular/http';
import {homeServiceProvider} from "./ajs-upgraded-providers";

@NgModule({
  imports: [
    BrowserModule,
    UpgradeModule,
    HttpModule
  ],
  declarations: [
    VegComponent
  ],
  entryComponents: [
    VegComponent
  ],
  providers: [
    VegService,
    homeServiceProvider
  ]
})
export class AppModule {
  constructor(private upgrade: UpgradeModule) { }
  ngDoBootstrap() {
    this.upgrade.bootstrap(document.body, ['fruitStore'], { strictDi: true });
  }
}