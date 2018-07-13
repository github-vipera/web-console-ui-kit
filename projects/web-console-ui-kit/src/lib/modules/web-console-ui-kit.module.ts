import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { KendoUIModulesProvider } from './kendo-ui-modules-provider.module'
import { WCGridButtonEditorComponent } from '../components/grid-editor/WCGridButtonEditorComponent'
import { WCPanelComponent } from '../components/containers/panel/WCPanelComponent'
import { WCDashboardHeaderComponent } from '../components/commons/DashboardHeader/WCDashboardHeaderComponent'
import { ToastrModule, ToastrService } from 'ngx-toastr';
import { WCDataCounterComponent } from '../components/data/Counter/WCDataCounterComponent'
import { WCGaugeComponent } from '../components/data/Gauge/wc-gauge.component'
import { WCSwitchButton } from '../components/commons/SwitchButton/wc-switch-button.component'

@NgModule({
  imports: [
    CommonModule, KendoUIModulesProvider, ToastrModule.forRoot()
  ],
  declarations: [ WCGridButtonEditorComponent, WCPanelComponent, WCDashboardHeaderComponent, WCDataCounterComponent, WCGaugeComponent, WCSwitchButton],
  exports: [ WCGridButtonEditorComponent, WCPanelComponent, WCDashboardHeaderComponent, WCDataCounterComponent, WCGaugeComponent, WCSwitchButton ],
  providers : [
    ToastrService
  ]
})
export class WebConsoleUIKitModule { } 
