import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'wc-gauge',
  templateUrl: './wc-gauge.component.html',
  styles: []
})
export class WCGaugeComponent implements OnInit {
  
  private _value:any;
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

  get value():any {
    return this._value;
  }

  @Input() set value(value:any) {
    this._value = value;
  }

  get counterClass():string {
    return this._counterClass;
  }

  @Input() set counterClass(value:string) {
    this._counterClass = value;
  }

}
