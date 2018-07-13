import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'wc-switch-button',
  templateUrl: './wc-switch-button.component.html',
  styles: []
})
export class WCSwitchButton implements OnInit {
  
  private _checked:boolean=false;
  private _id:string;
  private _title:string;

  constructor() { }

  ngOnInit() {
  }

  get title():string {
    return this._title;
  }

  @Input() set title(value:string) {
    this._title = value;
  }

  get id():string {
    return this._id;
  }

  @Input() set id(value:string) {
    this._id = value;
  }

  get checked():boolean {
    return this._checked;
  }

  @Input() set checked(value:boolean) {
    this._checked = value;
  }


}
