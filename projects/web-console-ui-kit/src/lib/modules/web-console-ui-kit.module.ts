import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { WCGridButtonEditorComponent } from '../components/grid-editor/WCGridButtonEditorComponent'
import { WCPanelComponent } from '../components/containers/panel/WCPanelComponent'
import { WCDashboardHeaderComponent } from '../components/commons/DashboardHeader/WCDashboardHeaderComponent'
import { ToastrModule, ToastrService } from 'ngx-toastr';
import { WCSwitchButton } from '../components/commons/SwitchButton/wc-switch-button.component'

@NgModule({
  imports: [
    CommonModule, ToastrModule.forRoot()
  ],
  declarations: [ WCGridButtonEditorComponent, WCPanelComponent, WCDashboardHeaderComponent, WCSwitchButton],
  exports: [ WCGridButtonEditorComponent, WCPanelComponent, WCDashboardHeaderComponent, WCSwitchButton ],
  providers : [
    ToastrService
  ]
})
export class WebConsoleUIKitModule { } 
