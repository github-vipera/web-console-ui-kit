import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { WCGridButtonEditorComponent } from '../components/grid-editor/WCGridButtonEditorComponent'
import { WCPanelComponent } from '../components/containers/panel/WCPanelComponent'
import { WCDashboardHeaderComponent } from '../components/commons/DashboardHeader/WCDashboardHeaderComponent'
import { ToastrModule, ToastrService } from 'ngx-toastr';
import { WCSwitchButton } from '../components/commons/SwitchButton/wc-switch-button.component'
import { WCSlideDownPanelComponent } from '../components/containers/slide-down-panel/wc-slide-down-panel.component'

@NgModule({
  imports: [
    CommonModule, ToastrModule.forRoot()
  ],
  declarations: [ WCGridButtonEditorComponent, WCPanelComponent, WCDashboardHeaderComponent, WCSwitchButton, WCSlideDownPanelComponent],
  exports: [ WCGridButtonEditorComponent, WCPanelComponent, WCDashboardHeaderComponent, WCSwitchButton, WCSlideDownPanelComponent ],
  providers : [
    ToastrService
  ]
})
export class WebConsoleUIKitCoreModule { } 
