import { NgModule } from '@angular/core'
import { ToolBarModule } from '@progress/kendo-angular-toolbar';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { GridModule, BodyModule, ExcelModule, FilterMenuModule, FooterModule, GroupModule, HeaderModule } from '@progress/kendo-angular-grid';
import { DropDownsModule } from '@progress/kendo-angular-dropdowns';
import { LayoutModule, PanelBarModule, SplitterModule, TabStripModule } from '@progress/kendo-angular-layout';
import { ButtonGroupModule, ButtonModule, ButtonsModule  } from '@progress/kendo-angular-buttons'
import { CalendarModule, DatePickerModule, DateRangeModule, TimePickerModule, MultiViewCalendarModule, DateInputModule, DateInputsModule, CalendarsModule } from '@progress/kendo-angular-dateinputs';

@NgModule({
    imports:[ 
        BrowserAnimationsModule, 
        ToolBarModule, 
        GridModule, BodyModule, ExcelModule, FilterMenuModule, FooterModule, GroupModule, HeaderModule, 
        DropDownsModule,
        LayoutModule, PanelBarModule, SplitterModule, TabStripModule,
        ButtonGroupModule, ButtonModule, ButtonsModule,
        CalendarModule, DatePickerModule, DateRangeModule, TimePickerModule, MultiViewCalendarModule, DateInputModule, DateInputsModule, CalendarsModule
    ],
    exports:[ 
        BrowserAnimationsModule, 
        ToolBarModule, 
        GridModule, BodyModule, ExcelModule, FilterMenuModule, FooterModule, GroupModule, HeaderModule, 
        DropDownsModule,
        LayoutModule, PanelBarModule, SplitterModule, TabStripModule,
        ButtonGroupModule, ButtonModule, ButtonsModule,
        CalendarModule, DatePickerModule, DateRangeModule, TimePickerModule, MultiViewCalendarModule, DateInputModule, DateInputsModule, CalendarsModule
    ]
})
export class WebConsoleUIKitKendoProviderModule {
    
}