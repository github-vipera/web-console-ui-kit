import { NgModule } from '@angular/core'
import { ToolBarModule } from '@progress/kendo-angular-toolbar';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { GridModule, BodyModule, ExcelModule, FilterMenuModule, FooterModule, GroupModule, HeaderModule } from '@progress/kendo-angular-grid';
import { DropDownsModule } from '@progress/kendo-angular-dropdowns';
import { LayoutModule, PanelBarModule, SplitterModule, TabStripModule } from '@progress/kendo-angular-layout';


@NgModule({
    imports:[ 
        BrowserAnimationsModule, 
        ToolBarModule, 
        GridModule, BodyModule, ExcelModule, FilterMenuModule, FooterModule, GroupModule, HeaderModule, 
        DropDownsModule,
        LayoutModule, PanelBarModule, SplitterModule, TabStripModule
    ],
    exports:[ 
        BrowserAnimationsModule, 
        ToolBarModule, 
        GridModule, BodyModule, ExcelModule, FilterMenuModule, FooterModule, GroupModule, HeaderModule, 
        DropDownsModule,
        LayoutModule, PanelBarModule, SplitterModule, TabStripModule
    ]
})
export class WebConsoleUIKitKendoProviderModule {
    
}