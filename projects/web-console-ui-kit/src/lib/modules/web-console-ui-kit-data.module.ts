import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { WCDataCounterComponent } from '../components/data/Counter/WCDataCounterComponent'
import { WCGaugeComponent } from '../components/data/Gauge/wc-gauge.component'
import { NgxGaugeModule } from '../components/data/NxGauge/ngx-gauge.module'

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [ WCDataCounterComponent, WCGaugeComponent ],
  exports: [ WCDataCounterComponent, WCGaugeComponent, NgxGaugeModule ],
  providers : [
  ]
})
export class WCUIKitDataModule { } 
