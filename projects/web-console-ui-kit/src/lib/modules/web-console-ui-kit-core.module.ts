import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { WCGridButtonEditorComponent } from '../components/grid-editor/WCGridButtonEditorComponent'
import { WCPanelComponent } from '../components/containers/panel/WCPanelComponent'
import { WCDashboardHeaderComponent } from '../components/commons/DashboardHeader/WCDashboardHeaderComponent'
import { ToastrModule, ToastrService } from 'ngx-toastr';
import { WCSwitchButton } from '../components/commons/SwitchButton/wc-switch-button.component'
import { WCSwitchControl } from '../components/commons/SwitchControl/wc-switch-control'
import { WCSlideDownPanelComponent } from '../components/containers/slide-down-panel/wc-slide-down-panel.component'
import { WCOverlayPane } from '../components/commons/OverlayPane/wc-overlay-pane.component'
import { WCOverlayPaneService } from '../services/OverlayPaneService/overlay-pane.service'
import { WCTabItemComponent } from '../components/containers/tabs/wc-tab-item.component'
import { WCTabPanelComponent } from '../components/containers/tabs/wc-tab-panel.component'
import { WCPropertyEditorComponent } from '../components/editors/property-editor/wc-property-editor.component'
import { FormsModule } from '@angular/forms';

@NgModule({
  imports: [
    CommonModule, ToastrModule.forRoot(), FormsModule
  ],
  declarations: [
    WCGridButtonEditorComponent,
    WCPanelComponent,
    WCDashboardHeaderComponent,
    WCSwitchButton,
    WCSwitchControl,
    WCSlideDownPanelComponent,
    WCOverlayPane,
    WCTabItemComponent,
    WCTabPanelComponent,
    WCPropertyEditorComponent
  ],
  exports: [
    WCGridButtonEditorComponent,
    WCPanelComponent,
    WCDashboardHeaderComponent,
    WCSwitchButton,
    WCSwitchControl,
    WCSlideDownPanelComponent,
    WCOverlayPane,
    WCTabItemComponent,
    WCTabPanelComponent,
    WCPropertyEditorComponent  ],
  entryComponents: [ WCOverlayPane ],
  providers : [
    ToastrService, WCOverlayPaneService
  ]
})
export class WebConsoleUIKitCoreModule { } 
