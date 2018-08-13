 
 import { Component, AfterContentInit, ContentChildren, QueryList  } from '@angular/core';
 import { Guid } from "guid-typescript";

 import { WCTabItemComponent } from './wc-tab-item.component'

 @Component({
   selector: 'wc-tab-panel',
   templateUrl: './wc-tab-panel.component.html',
   styleUrls: [ './wc-tab-panel.component.css' ]
 })
 export class WCTabPanelComponent implements AfterContentInit {

  public tabUID:string = "";//Guid.create().toString();

  @ContentChildren(WCTabItemComponent) tabs: QueryList<WCTabItemComponent>;

  constructor(){}

  ngAfterContentInit(){
    console.log("Tabs: ", this.tabs)
    let i = 1;
    this.tabs.forEach(tabItem =>  {
      tabItem.tabId = "tab-"+(i)
      i++;
    });
  }

} 