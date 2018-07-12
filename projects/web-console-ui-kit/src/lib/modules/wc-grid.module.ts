import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { WCGridComponent } from '../components/grid/wc-grid.component'
import { WCGridRowComponent } from '../components/grid/row/wc-grid-row.component'
import { WCGridCellComponent } from '../components/grid/cell/wc-grid-cell.component'
import { WCGridCellCommandComponent } from '../components/grid/cell-renderers/command/wc-grid-cell-renderer-command.component'

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [WCGridComponent, WCGridRowComponent, WCGridCellComponent, WCGridCellCommandComponent ],
  exports: [WCGridComponent, WCGridRowComponent, WCGridCellComponent, WCGridCellCommandComponent]
})
export class WCGridModule { } 
