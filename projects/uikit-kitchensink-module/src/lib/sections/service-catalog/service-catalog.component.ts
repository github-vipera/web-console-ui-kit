import { Component, OnInit, ViewChild, Input } from '@angular/core';
import { PluginView } from 'web-console-core'
import { WCToasterService } from 'web-console-ui-kit'
import { PageChangeEvent, GridComponent } from '@progress/kendo-angular-grid';
import { SortDescriptor, orderBy, GroupDescriptor, process, DataResult } from '@progress/kendo-data-query';
import { WCPropertyEditorModel, WCPropertyEditorComponent, WCPropertyEditorItem, WCPropertyEditorItemType } from 'web-console-ui-kit'
import { DomainsService } from '@wa-motif-open-api/platform-service'
import { SecurityService } from '@wa-motif-open-api/security-service'

@Component({
  selector: 'wa-app-content',
  styleUrls: [ './service-catalog.component.scss' ],
  templateUrl: './service-catalog.component.html'
})
@PluginView("Service Catalog",{
  iconName: "wa-ico-services" 
})
export class ServiceCatalogComponent implements OnInit {

  public gridView: DataResult;
  public sort: SortDescriptor[] = [];
  public groups: GroupDescriptor[] = [];

  @ViewChild('propertyEditor') _propertyEditor: WCPropertyEditorComponent;

  public propertyModel: WCPropertyEditorModel = {
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
        value: false,
        miniCommand: true,
        miniCommandCaption: 'Test...',
        linkTo: ['offlineMessages'],
        badge: 'I',
        badgeStyle: 'bcblue'
      },
      {
        name: "Offline Messages",
        field: "offlineMessages",
        type: WCPropertyEditorItemType.List,
        value: "",
        listValues: ["Audi", "Mercedes", "Alfa Romeo", "BMW", "Mini Cooper"],
        disabled: true,
        miniCommand: true,
        miniCommandCaption: 'Setup...',
        badge: 'L',
        badgeStyle: 'bcblue'
      },
      {
        name: "OTP expiry",
        field: "otpExpiry",
        type: WCPropertyEditorItemType.String,
        value: "-1",
        badge: 'M',
        badgeStyle: 'bcred'
      },
      {
        name: "Disabled Value",
        field: "disabledValue",
        type: WCPropertyEditorItemType.String,
        value: "this is disabled",
        disabled:true,
        badge: 'S',
        badgeStyle: 'bcred'
      },
      {
        name: "Age",
        field: "age",
        type: WCPropertyEditorItemType.String,
        value: "45",
        htmlInputType: "number",
        badge: 'N',
        badgeStyle: 'bcred'
      },
      {
        name: "Car Type",
        field: "carType",
        type: WCPropertyEditorItemType.List,
        value: "BMW",
        listValues: ["Audi", "Mercedes", "Alfa Romeo", "BMW", "Mini Cooper"],
        disabled:false,
        miniCommand: true,
        miniCommandCaption: 'Setup...',
        badge: 'L',
        badgeStyle: 'bcred'
      },
      {
        name: "Simple On/Off",
        field: "simpleOnOff",
        type: WCPropertyEditorItemType.Boolean,
        value: true,
        badge: 'B',
        badgeStyle: 'bcred'
      },
      {
        name: "JSON Value",
        field: "jsonValue",
        type: WCPropertyEditorItemType.Text,
        disabled: false,
        elementRef: 'myJSONValueText',
        placeholder: "Put here yout JSON",
        badge: 'T',
        badgeStyle: 'bcred'
      }
    ]
  };


  public data = [
    { name:"login", description:"Login Operation", type:"Operation", channel:"JSON", domain: "Default", application: "Vipera", service: "Security"},
    { name:"logout", description:"Logout Operation", type:"Operation", channel:"JSON", domain: "Default", application: "Vipera", service: "Security"},
    { name:"appcheck", description:"App Check Operation", type:"Operation", channel:"JSON", domain: "Default", application: "Vipera", service: "Utility"},
    { name:"pay", description:"HCE Pay Operation", type:"Operation", channel:"JSON", domain: "Bankart", application: "NLB Pay", service: "Payments"}
  ];

  constructor(private toaster: WCToasterService, 
    private domainService: DomainsService,
    private securityService: SecurityService) {
    console.log('ServiceCatalogComponent domainService', domainService);
  }

  ngOnInit() {
    this.groups = [{ field: 'domain' },{ field: 'application' },{ field: 'service' } ];
    this.gridView = process(this.data, { group: this.groups });

  }

  onSavePropertiesPressed():void{
    console.log('propertyModel save: ', this.propertyModel);

    this.domainService.getDomains().subscribe(data=>console.log('ServiceCatalogComponent getDomains:', data));

  }

  onPropertyChange(event: any) {
    console.log('>> onPropertyChange:', event);
  }

  onMinitButtonClick(event: any) {
    console.log('>> onMinitButtonClick:', event);
  }

  onTestButtonClicked(): void {
    console.log('>> onTestButtonClicked');
    const item: WCPropertyEditorItem = this._propertyEditor.getPropertyItem('description');
    item.value = 'Pippo';
    this.disableAllControls();
    console.log('>> onTestButtonClicked done');
  }

  disableAllControls(): void {
    this.disableControl('description');
    this.disableControl('offline');
    this.disableControl('otpExpiry');
    this.disableControl('disabledValue');
    this.disableControl('age');
    this.disableControl('carType');
    this.disableControl('simpleOnOff');
    this.disableControl('jsonValue');
  }

  disableControl(name: string) {
    const field: WCPropertyEditorItem = this._propertyEditor.getPropertyItem(name);
    field.disabled = !field.disabled;
  }

 }
