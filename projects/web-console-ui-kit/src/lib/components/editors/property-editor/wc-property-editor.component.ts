 
import { Component, AfterContentInit, Input, Output, EventEmitter  } from '@angular/core';

export enum WCPropertyEditorItemType {
  String = 'string',
  Boolean = 'boolean',
  List = 'list',
  Text = 'text'
}

export interface  WCPropertyEditorItem {
  name: string;
  description?: string;
  field: string;
  type: WCPropertyEditorItemType;
  value?: any;
  disabled?: boolean;
  htmlInputType?: string;
  valueChanged?: boolean;
  listValues?: string[];
  miniCommand?: boolean;
  miniCommandCaption?: string;
  placeholder?: string;
  elementRef?: string;
}

export interface WCPropertyEditorModel {
  items: WCPropertyEditorItem[];
}

export interface PropertyChangeEvent {
  item: WCPropertyEditorItem;
  newValue: any;
  originalValue: any;
}

export interface MinitButtonClickEvent {
  item: WCPropertyEditorItem;
}

 @Component({
   selector: 'wc-property-editor',
   templateUrl: './wc-property-editor.component.html',
   styleUrls: [ './wc-property-editor.component.scss' ]
 })
 export class WCPropertyEditorComponent implements AfterContentInit {

  private _model: WCPropertyEditorModel;
  private _originalModel: WCPropertyEditorModel;
  checkType: any = WCPropertyEditorItemType;

  @Output() propertyChange: EventEmitter<PropertyChangeEvent> = new EventEmitter();
  @Output() miniButtonClick: EventEmitter<MinitButtonClickEvent> = new EventEmitter();

  constructor() {}

  ngAfterContentInit() {
    console.log('WCPropertyEditorComponent: ', this.model);
  }

  onModelChanged(event: any) {
  }

  onPropertyChange(event: any) {
    const propertyChanged = event.srcElement.getAttribute('itemId');
    // console.log('********* onPropertyChange for '+propertyChanged+' !!! ', event)
    const originalValue = this.getOriginalValueFor(propertyChanged);
    const currentValue = this.getCurrentValueFor(propertyChanged);
    if (originalValue && (originalValue === currentValue)) {
      this.markPropertyChanged(propertyChanged, false);
    } else {
      this.markPropertyChanged(propertyChanged, true);
    }
    const item: WCPropertyEditorItem = this.getModelItemFor(propertyChanged, this._model);
    if ( item ) {
      this.propertyChange.emit({ item: item, newValue: currentValue, originalValue: originalValue });
    }
  }

  @Input()
  public get model() {
    return this._model;
  }

  public set model(model: WCPropertyEditorModel) {
    this._model = model;
    this._originalModel =  JSON.parse(JSON.stringify(model));
  }

  private getOriginalValueFor(propertyName: string):any {
    return this.getValueFor(propertyName, this._originalModel);
  }

  private getCurrentValueFor(propertyName: string): any {
    return this.getValueFor(propertyName, this._model);
  }

  private getValueFor(propertyName: string, model: WCPropertyEditorModel): any {
    const item =  this.getModelItemFor(propertyName, model);
    if (item) {
      return item.value;
    } else {
      return null;
    }
  }

  private getModelItemFor(propertyName: string, model: WCPropertyEditorModel): WCPropertyEditorItem {
    const item =  model.items.find(x => x.field === propertyName);
    if (item) {
      return item;
    } else {
      return null;
    }
  }
  private markPropertyChanged(propertyName: string, changed: boolean) {
    // console.log('markPropertyChanged ' + propertyName + ' -> ' + changed);
    const item =  this._model.items.find(x => x.field === propertyName);
    if (item) {
      item.valueChanged = changed;
    }
  }

  onMiniButtonClick(event: any) {
    const miniButtonClicked = event.srcElement.getAttribute('miniButtonItemId');
    const item: WCPropertyEditorItem = this.getModelItemFor(miniButtonClicked, this._model);
    if ( item ) {
      this.miniButtonClick.emit({ item: item });
    }

  }

  public getPropertyItem(propertyName: string): WCPropertyEditorItem {
    return this.getModelItemFor(propertyName, this._model);
  }

  
}
