import { Component, OnInit, Input } from '@angular/core';
import { PluginView } from 'web-console-core'
import { WCToasetrService } from 'web-console-ui-kit'
import { GridsterItem, GridsterConfig, GridType, CompactType } from 'web-console-ui-kit'
import { timer } from 'rxjs';
import { take } from 'rxjs/operators'

@Component({
  selector: 'wc-uikit-ks-dashboard-test',
  templateUrl: './dashboard-test.component.html',
  styleUrls: [ './dashboard-test.component.css' ]
})
@PluginView("Dashboard",{
  iconName: "ico-json" 
})
export class DashboardTestComponent implements OnInit {

  dateTime:Date = new Date;
  counter: number = 1;
  options: GridsterConfig;
  //dashboard: Array<GridsterItem>;
  operationCountsItem:GridsterItem;
  dateTimeItem:GridsterItem;
  public numOfSessions:number=4;

  constructor(private toaster: WCToasetrService) {
  }

  static itemChange(item, itemComponent) {
    console.info('itemChanged', item, itemComponent);
  }

  static itemResize(item, itemComponent) {
    console.info('itemResized', item, itemComponent);
  }

  ngOnInit() {
    this.options = {
      gridType: GridType.Fixed,
      compactType: CompactType.None,
      draggable: {
        enabled: true
      },
      resizable: {
        enabled: true,
      },
      displayGrid: 'onDrag&Resize',
      minCols: 3,
      maxCols: 100,
      minRows: 3,
      maxRows: 100,
      maxItemCols: 100,
      minItemCols: 1,
      maxItemRows: 100,
      minItemRows: 1,
      maxItemArea: 2500,
      minItemArea: 1,
      defaultItemCols: 1,
      defaultItemRows: 1,
      fixedColWidth: 105,
      fixedRowHeight: 105
    };

    this.operationCountsItem = {cols: 2, rows: 1, y: 0, x: 0};
    this.dateTimeItem = {cols: 3, rows: 3, y: 0, x: 3};

    /*
    this.dashboard = [
      {cols: 1, rows: 1, y: 0, x: 0},
      {cols: 3, rows: 3, y: 0, x: 1}
    ];
    */

    timer(0, 1560).subscribe(x=>{
        this.counter++;
    });

    timer(0, 1000).subscribe(x=>{
      this.dateTime = new Date();
  });

  }

  /*
  removeItem(item) {
    this.dashboard.splice(this.dashboard.indexOf(item), 1);
  }
  */


}
