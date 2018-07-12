import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'wc-panel',
  templateUrl: './wc-panel.component.html',
  styleUrls: [ './wc-panel.component.css' ]
})
export class WCPanelComponent implements OnInit {
  
  private _title:string;
  private _class:string;

  constructor() { }

  ngOnInit() {
  }

  get title():any {
    return this._title;
  }

  @Input() set title(value:any) {
    this._title = value;
  }

  get class():any {
    return this._class;
  }

  @Input() set class(value:any) {
    this._class = value;
  }

}
