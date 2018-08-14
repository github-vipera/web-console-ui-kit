 
import { Component, AfterContentInit, ContentChildren, QueryList, Input  } from '@angular/core';


export enum WCPropertyEditorItemType {
  String = 'string',
  Boolean = 'boolean'
}

export interface  WCPropertyEditorItem {
  name:string,
  description?:string,
  field:string,
  type:WCPropertyEditorItemType,
  value?:any
}

export interface WCPropertyEditorModel {
  items:WCPropertyEditorItem[]
}

 @Component({
   selector: 'wc-property-editor',
   templateUrl: './wc-property-edito.component.html',
   styleUrls: [ './wc-property-edito.component.scss' ]
 })
 export class WCPropertyEditorComponent implements AfterContentInit {

  @Input("model") model:WCPropertyEditorModel;
  checkType: any = WCPropertyEditorItemType;

  constructor(){}

  ngAfterContentInit(){
    console.log("WCPropertyEditorComponent: ", this.model);
  }

} 