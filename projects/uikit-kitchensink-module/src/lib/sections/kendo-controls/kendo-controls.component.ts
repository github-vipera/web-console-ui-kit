import { Component, OnInit, ViewChild, Input } from '@angular/core';
import { PluginView } from 'web-console-core'
import { WCToasterService } from 'web-console-ui-kit'

import { KendoUIDrawing } from 'web-console-ui-kit'

export interface Car {
  vin;
  year;
  brand;
  color;
}

@Component({
  selector: 'wa-kendo-controls-section',
  styleUrls: [ './kendo-controls.component.scss' ],
  templateUrl: './kendo-controls.component.html'
})
@PluginView("Kendo Controls",{
  iconName: "wa-ico-json" 
})
export class KendoControlsComponent implements OnInit {

  checked1: boolean = false;
  checked2: boolean = true;
  value: any;
  private baseImageUrl: string = "https://demos.telerik.com/kendo-ui/content/web/panelbar/";

  private surface:KendoUIDrawing.Surface;
  private path:KendoUIDrawing.Path;
  private text:KendoUIDrawing.Text;
  private group:KendoUIDrawing.Group;

  constructor(private toaster: WCToasterService) {

  }

  public imageUrl(imageName: string) :string {
    return this.baseImageUrl + imageName + ".jpg";
  }

  ngOnInit() {
  }


}
