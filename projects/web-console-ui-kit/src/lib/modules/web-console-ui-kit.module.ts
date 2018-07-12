import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { KendoUIModulesProvider } from './kendo-ui-modules-provider.module'
import { WCGridButtonEditorComponent } from '../components/grid-editor/WCGridButtonEditorComponent'
import { WCPanelComponent } from '../components/containers/panel/WCPanelComponent'
import { WCDashboardHeaderComponent } from '../components/commons/DashboardHeader/WCDashboardHeaderComponent'
import { ToastrModule, ToastrService } from 'ngx-toastr';
import { WCDataCounterComponent } from '../components/data/Counter/WCDataCounterComponent'

@NgModule({
  imports: [
    CommonModule, KendoUIModulesProvider, ToastrModule.forRoot()
  ],
  declarations: [ WCGridButtonEditorComponent, WCPanelComponent, WCDashboardHeaderComponent, WCDataCounterComponent],
  exports: [ WCGridButtonEditorComponent, WCPanelComponent, WCDashboardHeaderComponent, WCDataCounterComponent ],
  providers : [
    ToastrService
  ]
})
export class WebConsoleUIKitModule { } 
