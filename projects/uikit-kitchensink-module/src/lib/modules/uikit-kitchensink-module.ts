import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { WebConsoleCoreModule } from 'web-console-core'
import { WebConsoleUIKitCoreModule,
         WebConsoleUIKitDataModule,
         WebConsoleUIKitGridsterProviderModule,
         WebConsoleUIKitNgxChartsProviderModule,
         WebConsoleUIKitKendoProviderModule } from 'web-console-ui-kit';

import { DashboardTestComponent } from '../sections/dashboard/dashboard-test.component'
import { DashboardStatusBarItemComponent } from '../sections/dashboard/dashboard-status-bar-item.component' 
import { AppContentComponent } from '../sections/app-content/app-content.component'
import { ServiceCatalogComponent } from '../sections/service-catalog/service-catalog.component'
import { UsersListComponent } from '../sections/users-list/users-list.component'
import { OAuth2TokensListComponent } from '../sections/oauth2/oauth2.component'
import { RefreshTokenDetailsComponent } from '../sections/oauth2/refresh-token-details.component'
import { KendoControlsComponent} from '../sections/kendo-controls/kendo-controls.component'

@NgModule({
  imports: [
    WebConsoleCoreModule, WebConsoleUIKitCoreModule, WebConsoleUIKitDataModule, 
    WebConsoleUIKitGridsterProviderModule,
    CommonModule,
    WebConsoleUIKitNgxChartsProviderModule,
    WebConsoleUIKitKendoProviderModule
  ],
  entryComponents:[
    DashboardTestComponent, 
    DashboardStatusBarItemComponent, 
    AppContentComponent,  
    ServiceCatalogComponent,
    UsersListComponent,
    OAuth2TokensListComponent,
    RefreshTokenDetailsComponent,
    KendoControlsComponent
  ],
  declarations: [
    DashboardTestComponent, 
    DashboardStatusBarItemComponent, 
    AppContentComponent, 
    ServiceCatalogComponent,
    UsersListComponent,
    OAuth2TokensListComponent,
    RefreshTokenDetailsComponent,
    KendoControlsComponent
  ],
  exports: [DashboardTestComponent ]
})
export class UIKITKitchenSinkModule { }
