 
 import { Component, AfterContentInit, ContentChildren, QueryList  } from '@angular/core';

 import { WCTabItemComponent } from './wc-tab-item.component'

 @Component({
   selector: 'wc-tab-panel',
   templateUrl: './wc-tab-panel.component.html',
   styleUrls: [ './wc-tab-panel.component.css' ]
 })
 export class WCTabPanelComponent implements AfterContentInit {

  @ContentChildren(WCTabItemComponent) tabs: QueryList<WCTabItemComponent>;

  constructor(){}

  ngAfterContentInit(){
    console.log("Tabs: ", this.tabs)
  }

} 