import { Component, OnInit, Input } from '@angular/core';
import { ChangeDetectorRef } from '@angular/core';
import { WCGridColumnDef } from '../WCGridColumnDef'
import { WCGridColumnType } from '../WCGridColumnDef'
import { WCGridCellCommandComponent } from '../cell-renderers/command/wc-grid-cell-renderer-command.component'

@Component({
    selector: '[wc-grid-cell]',
    templateUrl: './wc-grid-cell.component.html',
    styles: []
  })
  export class WCGridCellComponent implements OnInit {
    
    private _data:any;
    private _configuration:WCGridColumnDef;
    private _row:number;
    private _column:number;
  
    constructor(private cd: ChangeDetectorRef) { }
  
    ngOnInit() {
    }
  
  
    get data():any {
        return this._data;
    }
    
    @Input() set data(data:any) {
      //console.log("****** SET DATA CALLED!!! ", data)
      this._data = data;
      this.cd.markForCheck();
      //TODO!! refresh();
    }
    
    
    get configuration():WCGridColumnDef {
      return this._configuration;
    }
  
    @Input() set configuration(configuration:WCGridColumnDef) {
      //console.log("****** SET CONFIGURATION!!! ", configuration)
      this._configuration = configuration;
      //TODO!! prepare grid UI
    }
    
    isCommandCell():boolean {
      return (this._configuration.type==WCGridColumnType.Command);
    }

    get row():number {
      return this._row;
    }
  
    @Input() set row(value:number) {
      this._row = value;
    }


    get column():number {
      return this._column;
    }
  
    @Input() set column(value:number) {
      this._column = value;
    }

    cellId():string {
      return this._configuration.name +"_"+ this._row +"_"+ this._column;
    }

  }
  
  