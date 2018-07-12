import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'wc-data-counter',
  templateUrl: './wc-data-counter.component.html',
  styles: []
})
export class WCDataCounterComponent implements OnInit {
  
  private _value:number;
  private _title:string;
  private _class:string = "";
  private _counterClass:string = "warn";

  constructor() { }

  ngOnInit() {
  }

  get title():string {
    return this._title;
  }

  @Input() set title(value:string) {
    this._title = value;
  }

  get class():string {
    return this._class;
  }

  @Input() set class(value:string) {
    this._class = value;
  }

  get value():number {
    return this._value;
  }

  @Input() set value(value:number) {
    this._value = value;
  }

  get counterClass():string {
    return this._counterClass;
  }

  @Input() set counterClass(value:string) {
    this._counterClass = value;
  }

}
