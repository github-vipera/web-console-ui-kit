import { Component, OnInit, ViewChild, Input } from '@angular/core';
import { PluginView } from 'web-console-core'
import { WCOverlayPaneService, WCToasterService } from 'web-console-ui-kit'

@Component({
  selector: 'wa-app-content',
  styleUrls: [ './app-content.component.scss' ],
  templateUrl: './app-content.component.html'
})
@PluginView("App Content",{
  iconName: "ico-app-content" 
})
export class AppContentComponent implements OnInit {

  constructor(private toaster: WCToasterService, private overlayPaneService: WCOverlayPaneService) {
  }

  ngOnInit() {
  }


}
