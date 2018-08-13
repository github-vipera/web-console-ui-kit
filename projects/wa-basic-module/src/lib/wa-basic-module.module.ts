import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { UsersListComponent } from './modules/users-list/users-list.component';
import { AppContentComponent } from './modules/app-content/app-content.component';
import { ServiceCatalogComponent } from './modules/service-catalog/service-catalog.component'

import { WebConsoleCoreModule } from 'web-console-core'
import { WebConsoleUIKitGridModule, WebConsoleUIKitModuleKendoProvider, WebConsoleUIKitCoreModule } from 'web-console-ui-kit'

@NgModule({
  imports: [
    WebConsoleCoreModule, WebConsoleUIKitGridModule, WebConsoleUIKitModuleKendoProvider, WebConsoleUIKitCoreModule, FormsModule
  ],
  entryComponents:[UsersListComponent, AppContentComponent, ServiceCatalogComponent],
  declarations: [UsersListComponent, AppContentComponent, ServiceCatalogComponent],
  exports: [UsersListComponent, AppContentComponent, ServiceCatalogComponent, FormsModule]
})
export class WABasicModule { }
