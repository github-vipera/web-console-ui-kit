import { Component, OnInit, Input, Output, EventEmitter, ViewChild, ContentChild, Renderer, ElementRef, AfterViewInit } from '@angular/core';

@Component({
  selector: 'wc-grid-editor',
  templateUrl: './wc-grid-btn-editor.component.html'
})
export class WCGridButtonEditorComponent implements OnInit {
  
  private _dataItem:any;
  private _rowIndex:number;
  private _columnIndex:number;
  private _column:number;
  private _mainClass:string = "";
  private _buttonClass:string = "";
  private _value:string;
  private _question:string ="n.d.";

  @Output() 
  onConfirmation:EventEmitter<void> = new EventEmitter<void>();
  @Output() 
  onCancel:EventEmitter<void> = new EventEmitter<void>();

  constructor(private elt:ElementRef, private renderer:Renderer) { }

  ngOnInit() {
  }

  ngAfterViewInit() {
  }

  get dataItem():any {
    return this._dataItem;
  }

  @Input() set dataItem(value:any) {
    this._dataItem = value;
  }

  get rowIndex():number {
    return this._rowIndex;
  }

  @Input() set rowIndex(value:number) {
    this._rowIndex = value;
  }

  get columnIndex():number {
    return this._columnIndex;
  }

  @Input() set columnIndex(value:number) {
    this._columnIndex = value;
  }

  get column():number {
    return this._column;
  }

  @Input() set column(value:number) {
    this._column = value;
  }

  get rowId():string {
      return this._rowIndex +"_" + this._columnIndex;
  }

  get mainClass():string {
    return this._mainClass;
  }

  @Input() set mainClass(value:string) {
    this._mainClass = value;
  }

  get buttonClass():string {
    return this._buttonClass;
  }

  @Input() set buttonClass(value:string) {
    this._buttonClass = value;
  }

  get question():string{
    return this._question;
  }

  @Input() set question(question:string){
    this._question = question;
  }

  get value():string {
    return this._value;
  }

  @Input() set value(value:string) {
    this._value = value;
  }

  onOKPressed():void {
     //console.log(">>>> onOKPressed (on component)")
     this.onConfirmation.emit();
    }

  onKOPressed():void {
    //console.log(">>>> onKOPressed (on component)")
    this.onCancel.emit();
  }

  onRendererClick():void {
    alert("pippo clicked!");
  }

}
