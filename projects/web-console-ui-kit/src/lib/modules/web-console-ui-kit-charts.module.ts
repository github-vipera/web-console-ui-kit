import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

/*
import { NgxChartsModule, BarChartModule, AreaChartModule, AxesModule, BubbleChartModule, ChartCommonModule,GaugeModule,HeatMapModule,LineChartModule,NumberCardModule, PieChartModule,PolarChartModule,TooltipModule,TreeMapModule } from '@swimlane/ngx-charts'


@NgModule({
    imports: [ NgxChartsModule, BarChartModule, AreaChartModule, AxesModule, BubbleChartModule, ChartCommonModule, GaugeModule, HeatMapModule, LineChartModule, NumberCardModule, PieChartModule, PolarChartModule, TooltipModule, TreeMapModule ],
    exports: [ NgxChartsModule, BarChartModule, AreaChartModule, AxesModule, BubbleChartModule, ChartCommonModule, GaugeModule, HeatMapModule, LineChartModule, NumberCardModule, PieChartModule, PolarChartModule, TooltipModule, TreeMapModule ],
    declarations: [],
    providers : []
})
export class WebConsoleUIKitChartsModule { } 
*/

import { NgxChartsModule } from '@swimlane/ngx-charts'

@NgModule({
    imports: [ NgxChartsModule],
    exports: [ NgxChartsModule ],
    declarations: [],
    providers : []
})
export class WebConsoleUIKitChartsModule { } 
