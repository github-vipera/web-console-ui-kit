 
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
  value?:any,
  disabled?:boolean,
  htmlInputType?:string
}

export interface WCPropertyEditorModel {
  items:WCPropertyEditorItem[]
}

 @Component({
   selector: 'wc-property-editor',
   templateUrl: './wc-property-editor.component.html',
   styleUrls: [ './wc-property-editor.component.scss' ]
 })
 export class WCPropertyEditorComponent implements AfterContentInit {

  @Input("model") model:WCPropertyEditorModel;
  checkType: any = WCPropertyEditorItemType;

  constructor(){}

  ngAfterContentInit(){
    console.log("WCPropertyEditorComponent: ", this.model);
  }

  onModelChanged(event:any){
    console.log("********* onModelChanged!!! ", event)
  }
  
  onPropertyChange(event:any){
    let propertyChanged = event.srcElement.getAttribute("itemId");
    console.log("********* onPropertyChange for "+propertyChanged+" !!! ", event)
  }
} 