import { Component, OnInit, Input, OnDestroy, AfterViewInit, ViewChild } from '@angular/core';
import { PluginView, StatusBarService, StatusBarItem } from 'web-console-core'
import { WCToasterService } from 'web-console-ui-kit'
import { Gridster } from 'web-console-ui-kit'
import { timer } from 'rxjs';
import { DashboardStatusBarItemComponent } from './dashboard-status-bar-item.component'

@Component({
  selector: 'wc-uikit-ks-dashboard-test',
  templateUrl: './dashboard-test.component.html',
  styleUrls: [ './dashboard-test.component.css' ]
})
@PluginView("Dashboard",{
  iconName: "wa-ico-json" 
})
export class DashboardTestComponent implements OnInit, OnDestroy, AfterViewInit {

  dateTime:Date = new Date;
  counter: number = 1;
  options: Gridster.GridsterConfig;
  
  operationCountsItem:Gridster.GridsterItem;
  dateTimeItem:Gridster.GridsterItem;
  gaugeItem:Gridster.GridsterItem;

  public numOfSessions:number=4;

  gaugeType = "semi";
  gaugeValue = 33;
  gaugeLabel = "";
  gaugeAppendText = "%";

  //chart =======>>

  single: any[];
  multi: any[];

  view: any[] = [700, 400];

  // options
  showXAxis = true;
  showYAxis = true;
  gradient = false;
  showLegend = true;
  showXAxisLabel = true;
  xAxisLabel = 'Country';
  showYAxisLabel = true;
  yAxisLabel = 'Population';

  colorScheme = {
    domain: ['#5AA454', '#A10A28', '#C7B42C', '#AAAAAA']
  };

  // line, area
  autoScale = true;
  
  
  //chart <<=======

  constructor(private toaster: WCToasterService, private statusBarService: StatusBarService ) {

    this.single = [
      {
        "name": "Germany",
        "value": 8940000
      },
      {
        "name": "USA",
        "value": 5000000
      },
      {
        "name": "France",
        "value": 7200000
      }
    ];

    this.multi = [
      {
        "name": "Germany",
        "series": [
          {
            "name": "2010",
            "value": 7300000
          },
          {
            "name": "2011",
            "value": 8940000
          }
        ]
      },
    
      {
        "name": "USA",
        "series": [
          {
            "name": "2010",
            "value": 7870000
          },
          {
            "name": "2011",
            "value": 8270000
          }
        ]
      },
    
      {
        "name": "France",
        "series": [
          {
            "name": "2010",
            "value": 5000002
          },
          {
            "name": "2011",
            "value": 5800000
          }
        ]
      }
    ];
  }

  private itemChange(item, itemComponent) {
    console.info('itemChanged', item, itemComponent);
  }

  private itemResize(item, itemComponent) {
    console.info('itemResized', item, itemComponent);
  }

  ngOnInit() {

    this.addStatusBarItem();

    this.options = {
      itemChangeCallback: this.itemChange,
      itemResizeCallback: this.itemResize,
      gridType: Gridster.GridType.Fixed,
      compactType: Gridster.CompactType.None,
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
      fixedColWidth: 70,
      fixedRowHeight: 70
    };

    this.operationCountsItem = {cols: 3, rows: 2, y: 0, x: 0};
    this.dateTimeItem = {cols: 5, rows: 2, y: 0, x: 3};
    this.gaugeItem =  {cols: 3, rows: 3, y: 0, x: 8};

    timer(0, 1560).subscribe(x=>{
        this.counter++;
    });

    timer(0, 1000).subscribe(x=>{
      this.dateTime = new Date();
    });

    this.statusBarService.setStatus("Welcome to the dashboard!");
    
  }

  ngOnDestroy(){
    this.statusBarService.removeItem("wa-dashboard-sbitem");
  }

  addStatusBarItem(){
    console.info('addStatusBarItem');
    this.statusBarService.addItem(new StatusBarItem("wa-dashboard-sbitem", DashboardStatusBarItemComponent, {}));
  }

  ngAfterViewInit(){
  }

  onSelect(event) {
    console.log(event);
  }

}
