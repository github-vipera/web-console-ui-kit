import { Component, OnInit, Input } from '@angular/core';
import {  ChangeDetectorRef } from '@angular/core';
import { WCGridConfiguration } from './WCGridConfiguration'
import { WCGridRowComponent } from './row/wc-grid-row.component'

@Component({
  selector: 'wc-grid',
  templateUrl: './wc-grid.component.html',
  styles: []
})
export class WCGridComponent implements OnInit {
  
  private _data:Array<any>;
  private _configuration:WCGridConfiguration;

  constructor(private cd: ChangeDetectorRef) { }

  ngOnInit() {
  }


  get data():Array<any> {
      return this._data;
  }
  
  @Input() set data(data:Array<any>) {
    //console.log("****** SET DATA CALLED!!! ", data)
    this._data = data;
    this.cd.markForCheck();
    //TODO!! refresh();
  }

  get configuration():WCGridConfiguration {
    return this._configuration;
  }

  @Input() set configuration(configuration:WCGridConfiguration) {
    //console.log("****** SET CONFIGURATION!!! ", configuration)
    this._configuration = configuration;
    //TODO!! prepare grid UI
  }

  rowValues(data:any):Array<string>{
    let cols = this._configuration.columns;
    let arr = [];
    for (var i=0;i<cols.length;i++){
      arr.push(data[cols[i].name]);
    }
    return arr;
  }

  objectKeys(data:any):Array<string>{
    return Object.keys(data);
  }

}

