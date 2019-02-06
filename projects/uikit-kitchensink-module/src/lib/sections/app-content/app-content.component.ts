import { Component, OnInit, ViewChild, Input } from '@angular/core';
import { PluginView } from 'web-console-core'
import { WCToasterService } from 'web-console-ui-kit'

export interface Car {
  vin;
  year;
  brand;
  color;
}

@Component({
  selector: 'wa-app-content-section',
  styleUrls: [ './app-content.component.scss' ],
  templateUrl: './app-content.component.html'
})
@PluginView("App Content",{
  iconName: "wa-ico-app-content" 
})
export class AppContentComponent implements OnInit {

  cars: Array<Car>;

  constructor(private toaster: WCToasterService) {
    this.cars = new Array<Car>();
    this.cars.push({
      brand: "BMW",
      color: "white",
      vin: "123456",
      year: "2016"
    })
    this.cars.push({
      brand: "Mercedes",
      color: "black",
      vin: "123458",
      year: "2017"
    })
  }

  ngOnInit() {
  }


}
