import { Component, AfterContentInit, Input, Output, EventEmitter, ViewChild, ElementRef, ChangeDetectorRef  } from '@angular/core';
//import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { faTimesCircle } from '@fortawesome/free-solid-svg-icons';


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
  linkTo?: string[];
  badge?:string;
  badgeStyle?:string;
  allowRemove?:boolean;
  removed?:boolean;
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

  //icons
  faTimesCircle = faTimesCircle;

  private _model: WCPropertyEditorModel;
  private _originalModel: WCPropertyEditorModel;
  checkType: any = WCPropertyEditorItemType;

  @Output() propertyChange: EventEmitter<PropertyChangeEvent> = new EventEmitter();
  @Output() miniButtonClick: EventEmitter<MinitButtonClickEvent> = new EventEmitter();
  @Output() newPropertyRequired: EventEmitter<String> = new EventEmitter();

  @ViewChild('newPropertyPromptSelector') _newPropertyPromptSelector: ElementRef;
  @ViewChild('baseline') _baseline: ElementRef;

  constructor(private changeDetector: ChangeDetectorRef) {}

  ngAfterContentInit() {
    console.log('WCPropertyEditorComponent: ', this.model);
  }

  onModelChanged(event: any) {
  }

  onPropertyChange(event: any) {
    const propertyChanged = event.srcElement.getAttribute('itemId');
    const originalValue = this.getOriginalValueFor(propertyChanged);
    const currentValue = this.getCurrentValueFor(propertyChanged);
    if ( (originalValue || (typeof originalValue === "boolean")) && (originalValue === currentValue)) {
      this.markPropertyChanged(propertyChanged, false);
    } else {
      this.markPropertyChanged(propertyChanged, true);
    }
    const item: WCPropertyEditorItem = this.getModelItemFor(propertyChanged, this._model);
    if ( item ) {
      // handle linked items if it's a boolean swicth and has a linked items
      if ((item.type === WCPropertyEditorItemType.Boolean) && (item.linkTo)){
        this.handleLinkedItems(item);
      }
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

  onRemovePropertyClick(event: any, propertyName:string) {
    //const propertyName = event.srcElement.parentElement.parentElement.getAttribute('removePropertyItemId');
    this.removePropertyByName(propertyName);
  }

  public getPropertyItem(propertyName: string): WCPropertyEditorItem {
    return this.getModelItemFor(propertyName, this._model);
  }

  /**
   * Enable/disable linked items to a boolean switch field
   * @param item
   */
  private handleLinkedItems(item: WCPropertyEditorItem): void {
    const linkedItems: string[] = item.linkTo;
    for (let i = 0; i < linkedItems.length; i++) {
      const linkedItem: WCPropertyEditorItem = this.getPropertyItem(linkedItems[i]);
      linkedItem.disabled = !item.value;
    }
  }

  private removePropertyByName(propertyName: string){
    let index = this.getPropertyIndexByName(propertyName);
    if (index>=0){
      this._model.items[index].removed = true;
    }    
    this.changeDetector.markForCheck();
  }

  private getPropertyIndexByName(propertyName: string){
    for (let i=0;i<this._model.items.length;i++){
      if (this._model.items[i].field===propertyName){
        return i;
      }
    }
    return -1;
  }

  public addProperty(newProperty:WCPropertyEditorItem){
    this._model.items.push(newProperty);
    this.changeDetector.markForCheck();
  }

  private _promtpForNewProperty: boolean;
  public promtpPropertyList:Array<String> = [];
  
  public promptForNewProperty(propertyNames:Array<String>){
    if (propertyNames && propertyNames.length>0){
      this.promtpPropertyList = propertyNames;
      this._promtpForNewProperty = true;
      let baseline = this._baseline.nativeElement;
      baseline.scrollIntoView();
    }
  }

  public get isNewPropertyPrompt():boolean {
    return this._promtpForNewProperty;
  }

  onPropertyPromptChange(){
    let select = this._newPropertyPromptSelector.nativeElement;
    let value = select.options[select.selectedIndex].value;
    this.newPropertyRequired.emit(value);
    this._promtpForNewProperty = false;
  }

}
