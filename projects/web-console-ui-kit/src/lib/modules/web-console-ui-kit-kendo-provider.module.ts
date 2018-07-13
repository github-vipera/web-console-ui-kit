import { NgModule } from '@angular/core'
import { ToolBarModule } from '@progress/kendo-angular-toolbar';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { GridModule } from '@progress/kendo-angular-grid';
import { DropDownsModule } from '@progress/kendo-angular-dropdowns';

@NgModule({
    imports:[ BrowserAnimationsModule, ToolBarModule, GridModule, DropDownsModule ],
    exports:[ BrowserAnimationsModule, ToolBarModule, GridModule, DropDownsModule ]
})
export class WebConsoleUIKitModuleKendoProvider {
    
}