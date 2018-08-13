import { Component, OnInit, ViewChild, Input } from '@angular/core';
import { PluginView } from 'web-console-core'
import { WCOverlayPaneService, WCToasterService } from 'web-console-ui-kit'
import { PageChangeEvent, GridComponent } from '@progress/kendo-angular-grid';
import { SortDescriptor, orderBy, GroupDescriptor, process, DataResult } from '@progress/kendo-data-query';

@Component({
  selector: 'wa-app-content',
  styleUrls: [ './service-catalog.component.scss' ],
  templateUrl: './service-catalog.component.html'
})
@PluginView("Service Catalog",{
  iconName: "ico-services" 
})
export class ServiceCatalogComponent implements OnInit {

  public gridView: DataResult;
  public sort: SortDescriptor[] = [];
  public groups: GroupDescriptor[] = [];

  constructor(private toaster: WCToasterService, private overlayPaneService: WCOverlayPaneService) {
  }

  ngOnInit() {
  }


}
