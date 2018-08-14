import { Component, OnInit, ViewChild, Input } from '@angular/core';
import { PluginView } from 'web-console-core'
import { WCOverlayPaneService, WCToasterService } from 'web-console-ui-kit'
import { PageChangeEvent, GridComponent } from '@progress/kendo-angular-grid';
import { SortDescriptor, orderBy, GroupDescriptor, process, DataResult } from '@progress/kendo-data-query';
import { WCPropertyEditorModel, WCPropertyEditorComponent, WCPropertyEditorItem, WCPropertyEditorItemType } from 'web-console-ui-kit'

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


  public propertyModel:WCPropertyEditorModel = {
    items: [
      {
        name: "Description",
        field: "description",
        type: WCPropertyEditorItemType.String,
        value: "Vipera platform secure"
      },
      {
        name: "Offline",
        field: "offline",
        type: WCPropertyEditorItemType.Boolean,
        value: true
      },
      {
        name: "OTP expiry",
        field: "otpExpiry",
        type: WCPropertyEditorItemType.String,
        value: "-1"
      }

    ]
  }

  /**
  public data = [
    { name:"Default", description:"MOTIF Default", type:"Domain", channel:"", domain: "Default", application: "", service: ""},
      { name:"Vipera", description:"Vipera Default Application", type:"Application", channel:"", domain: "Default", application: "Vipera", service: ""},
        { name:"Security", description:"Securiry Service", type:"Service", channel:"", domain: "Default", application: "Vipera", service: "Security"},
          { name:"login", description:"Login Operation", type:"Operation", channel:"JSON", domain: "Default", application: "Vipera", service: "Security"},
          { name:"logout", description:"Logout Operation", type:"Operation", channel:"JSON", domain: "Default", application: "Vipera", service: "Security"}
  ]
   */

  public data = [
    { name:"login", description:"Login Operation", type:"Operation", channel:"JSON", domain: "Default", application: "Vipera", service: "Security"},
    { name:"logout", description:"Logout Operation", type:"Operation", channel:"JSON", domain: "Default", application: "Vipera", service: "Security"},
    { name:"appcheck", description:"App Check Operation", type:"Operation", channel:"JSON", domain: "Default", application: "Vipera", service: "Utility"},
    { name:"pay", description:"HCE Pay Operation", type:"Operation", channel:"JSON", domain: "Bankart", application: "NLB Pay", service: "Payments"}
  ]
  

  constructor(private toaster: WCToasterService, private overlayPaneService: WCOverlayPaneService) {
  }

  ngOnInit() {
    this.groups = [{ field: 'domain' },{ field: 'application' },{ field: 'service' } ];
    this.gridView = process(this.data, { group: this.groups });
  }

  onSavePropertiesPressed():void{
    console.log("propertyModel save: ", this.propertyModel);
  }

}
