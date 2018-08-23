import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { WebConsoleCoreModule } from 'web-console-core'
import { WebConsoleUIKitCoreModule, WebConsoleUIKitDataModule } from 'web-console-ui-kit'
import { WebConsoleUIKitGridsterProviderModule, WebConsoleUIKitNgxChartsProviderModule, WebConsoleUIKitPrimeNgProviderModule, WebConsoleUIKitKendoProviderModule } from 'web-console-ui-kit';

import { DashboardTestComponent } from '../sections/dashboard/dashboard-test.component'
import { DashboardStatusBarItemComponent } from '../sections/dashboard/dashboard-status-bar-item.component' 
import { AppContentComponent } from '../sections/app-content/app-content.component'
import { ServiceCatalogComponent } from '../sections/service-catalog/service-catalog.component'
import { UsersListComponent } from '../sections/users-list/users-list.component'
import { PrimengControlsComponent} from '../sections/primeng-controls/primeng-controls.component'

@NgModule({
  imports: [
    WebConsoleCoreModule, WebConsoleUIKitCoreModule, WebConsoleUIKitDataModule, 
    WebConsoleUIKitGridsterProviderModule, 
    CommonModule, 
    WebConsoleUIKitNgxChartsProviderModule, 
    WebConsoleUIKitPrimeNgProviderModule, 
    WebConsoleUIKitKendoProviderModule
  ],
  entryComponents:[
    DashboardTestComponent, 
    DashboardStatusBarItemComponent, 
    AppContentComponent,  
    ServiceCatalogComponent,
    UsersListComponent,
    PrimengControlsComponent
  ],
  declarations: [
    DashboardTestComponent, 
    DashboardStatusBarItemComponent, 
    AppContentComponent, 
    ServiceCatalogComponent,
    UsersListComponent,
    PrimengControlsComponent
  ],
  exports: [DashboardTestComponent ]
})
export class UIKITKitchenSinkModule { }
