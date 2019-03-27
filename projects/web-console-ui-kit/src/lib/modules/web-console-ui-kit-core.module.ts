import { WCSlidePanelComponent } from './../components/containers/slide-panel/slide-panel-component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { WCPanelComponent } from '../components/containers/panel/WCPanelComponent'
import { WCDashboardHeaderComponent } from '../components/commons/DashboardHeader/WCDashboardHeaderComponent'
import { ToastrModule, ToastrService } from 'ngx-toastr';
import { WCSwitchButton } from '../components/commons/SwitchButton/wc-switch-button.component'
import { WCSwitchControl } from '../components/commons/SwitchControl/wc-switch-control'
import { WCTabItemComponent } from '../components/containers/tabs/wc-tab-item.component'
import { WCTabPanelComponent } from '../components/containers/tabs/wc-tab-panel.component'
import { WCPropertyEditorComponent } from '../components/editors/property-editor/wc-property-editor.component'
import { FormsModule } from '@angular/forms';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';

@NgModule({
  imports: [
    CommonModule, ToastrModule.forRoot(), FormsModule, FontAwesomeModule
  ],
  declarations: [
    WCPanelComponent,
    WCDashboardHeaderComponent,
    WCSwitchButton,
    WCSwitchControl,
    WCSlidePanelComponent,
    WCTabItemComponent,
    WCTabPanelComponent,
    WCPropertyEditorComponent
  ],
  exports: [
    WCPanelComponent,
    WCDashboardHeaderComponent,
    WCSwitchButton,
    WCSwitchControl,
    WCSlidePanelComponent,
    WCTabItemComponent,
    WCTabPanelComponent,
    WCPropertyEditorComponent  ],
  entryComponents: [  ],
  providers : [
    ToastrService
  ]
})
export class WCUIKitCoreModule { } 
