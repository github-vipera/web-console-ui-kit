import {NgModule} from '@angular/core'
import { ToolBarModule } from '@progress/kendo-angular-toolbar';


@NgModule({
    imports:[ ToolBarModule ],
    exports:[ ToolBarModule ]
})
export class KendoUIModulesProvider {
    
}