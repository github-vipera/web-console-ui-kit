import { Component, OnInit, Input } from '@angular/core';
import { ChangeDetectorRef } from '@angular/core';
import { WCGridConfiguration } from '../WCGridConfiguration'
import { WCGridCellComponent } from '../cell/wc-grid-cell.component'

 
@Component({
    selector: '[wc-grid-row]',
    templateUrl: './wc-grid-row.component.html',
    styles: []
  })
  export class WCGridRowComponent implements OnInit {
    
    private _data:Array<any>;
    private _configuration:WCGridConfiguration;
    private _row:number;
  
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
    
    get row():number {
      return this._row;
    }
  
    @Input() set row(value:number) {
      this._row = value;
    }

  }
  
  