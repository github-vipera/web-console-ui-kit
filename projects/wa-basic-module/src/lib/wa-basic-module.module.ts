import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { UsersListComponent } from './modules/users-list/users-list.component';
import { WebConsoleCoreModule } from 'web-console-core'
import { WebConsoleUIKitGridModule, WebConsoleUIKitModuleKendoProvider, WebConsoleUIKitCoreModule } from 'web-console-ui-kit'

@NgModule({
  imports: [
    WebConsoleCoreModule, WebConsoleUIKitGridModule, WebConsoleUIKitModuleKendoProvider, WebConsoleUIKitCoreModule, FormsModule
  ],
  entryComponents:[UsersListComponent],
  declarations: [UsersListComponent],
  exports: [UsersListComponent, FormsModule]
})
export class WABasicModule { }
