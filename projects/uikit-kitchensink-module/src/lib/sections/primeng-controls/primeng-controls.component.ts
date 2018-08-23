import { Component, OnInit, ViewChild, Input } from '@angular/core';
import { PluginView } from 'web-console-core'
import { WCOverlayPaneService, WCToasterService } from 'web-console-ui-kit'
import { TerminalService } from 'web-console-ui-kit'

export interface Car {
  vin;
  year;
  brand;
  color;
}

@Component({
  selector: 'wa-primeng-controls-section',
  styleUrls: [ './primeng-controls.component.scss' ],
  templateUrl: './primeng-controls.component.html',
  providers: [TerminalService]
})
@PluginView("Primeng Controls",{
  iconName: "ico-json" 
})
export class PrimengControlsComponent implements OnInit {

  checked1: boolean = false;
  checked2: boolean = true;
  value: any;
  private baseImageUrl: string = "https://demos.telerik.com/kendo-ui/content/web/panelbar/";

  constructor(private toaster: WCToasterService, private overlayPaneService: WCOverlayPaneService) {

  }

  public imageUrl(imageName: string) :string {
    return this.baseImageUrl + imageName + ".jpg";
  }

  ngOnInit() {
  }


}
