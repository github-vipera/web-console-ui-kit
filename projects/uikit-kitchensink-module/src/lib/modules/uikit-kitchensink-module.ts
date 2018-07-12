import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { WebConsoleCoreModule } from 'web-console-core'
import { WebConsoleUIKitModule } from 'web-console-ui-kit'
import { GridsterModule } from 'web-console-ui-kit';
import { NgxGaugeModule } from 'web-console-ui-kit';
import { DashboardTestComponent } from '../components/dashboard/dashboard-test.component'

@NgModule({
  imports: [
    WebConsoleCoreModule, WebConsoleUIKitModule, GridsterModule, CommonModule, NgxGaugeModule
  ],
  entryComponents:[DashboardTestComponent],
  declarations: [DashboardTestComponent],
  exports: [DashboardTestComponent]
})
export class UIKITKitchenSinkModule { }
