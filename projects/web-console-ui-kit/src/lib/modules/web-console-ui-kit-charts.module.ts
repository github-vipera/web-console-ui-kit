
import { NgModule } from '@angular/core';

import * as NgxCharts from '@swimlane/ngx-charts';
export { NgxCharts }; 

import { NgxChartsModule } from '@swimlane/ngx-charts';


@NgModule({
    imports: [ NgxChartsModule],
    exports: [ NgxChartsModule ],
    declarations: [],
    providers : []
})
export class WCUIKitNgxChartsProviderModule { } 
