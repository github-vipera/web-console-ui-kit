 
import { Component, AfterContentInit, ContentChildren, QueryList, Input  } from '@angular/core';
import { THIS_EXPR } from '../../../../../../../node_modules/@angular/compiler/src/output/output_ast';


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
  htmlInputType?:string,
  valueChanged?:boolean
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

  //@Input("model") model:WCPropertyEditorModel;
  private _model:WCPropertyEditorModel;
  private _originalModel:WCPropertyEditorModel;
  checkType: any = WCPropertyEditorItemType;

  constructor(){}

  ngAfterContentInit(){
    console.log("WCPropertyEditorComponent: ", this.model);
  }

  onModelChanged(event:any){
  }
  
  onPropertyChange(event:any){
    let propertyChanged = event.srcElement.getAttribute("itemId");
    console.log("********* onPropertyChange for "+propertyChanged+" !!! ", event)
    let originalValue = this.getOriginalValueFor(propertyChanged);
    let currentValue = this.getCurrentValueFor(propertyChanged);
    if (originalValue && (originalValue===currentValue)){
      this.markPropertyChanged(propertyChanged, false);
    } else {
      this.markPropertyChanged(propertyChanged, true);
    }
  }

  @Input()
  public get model(){
    return this._model;
  }

  public set model(model:WCPropertyEditorModel){
    this._model = model;
    this._originalModel =  JSON.parse(JSON.stringify(model))
  }

  private getOriginalValueFor(propertyName:string):any {
    return this.getValueFor(propertyName, this._originalModel);
  }

  private getCurrentValueFor(propertyName:string):any {
    return this.getValueFor(propertyName, this._model);
  }

  private getValueFor(propertyName:string, model:WCPropertyEditorModel):any {
    let item =  model.items.find(x => x.name == propertyName);
    if (item){
      return item.value;
    } else {
      return null;
    }
  }

  private markPropertyChanged(propertyName: string, changed:boolean){
    let item =  this._model.items.find(x => x.name == propertyName);
    if (item){
      item.valueChanged = changed;
    }
  }

} 