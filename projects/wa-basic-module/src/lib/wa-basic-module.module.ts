import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { UsersListComponent } from './modules/users-list/users-list.component';
import { WebConsoleCoreModule } from 'web-console-core'
import { WCGridModule, KendoUIModulesProvider, WebConsoleUIKitModule, WCGridButtonEditorComponent } from 'web-console-ui-kit'

@NgModule({
  imports: [
    WebConsoleCoreModule, WCGridModule, KendoUIModulesProvider, WebConsoleUIKitModule, FormsModule
  ],
  entryComponents:[UsersListComponent],
  declarations: [UsersListComponent],
  exports: [UsersListComponent, FormsModule]
})
export class WABasicModule { }
