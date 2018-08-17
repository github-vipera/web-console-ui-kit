import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { WebConsoleCoreModule } from 'web-console-core'
import { WebConsoleUIKitCoreModule, WebConsoleUIKitDataModule } from 'web-console-ui-kit'
import { GridsterModule } from 'web-console-ui-kit';
import { WebConsoleUIKitChartsModule } from 'web-console-ui-kit';
import { DashboardTestComponent } from '../components/dashboard/dashboard-test.component'
import { DashboardStatusBarItemComponent } from '../components/dashboard/dashboard-status-bar-item.component' 

@NgModule({
  imports: [
    WebConsoleCoreModule, WebConsoleUIKitCoreModule, WebConsoleUIKitDataModule, GridsterModule, CommonModule, WebConsoleUIKitChartsModule
  ],
  entryComponents:[DashboardTestComponent, DashboardStatusBarItemComponent],
  declarations: [DashboardTestComponent, DashboardStatusBarItemComponent  ],
  exports: [DashboardTestComponent ]
})
export class UIKITKitchenSinkModule { }
