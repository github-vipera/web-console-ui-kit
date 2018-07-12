import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'wc-dashboard-header',
  templateUrl: './wc-dashboard-header.component.html',
  styles: []
})
export class WCDashboardHeaderComponent implements OnInit {
  
  private _title:string;
  private _class:string = "";

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
