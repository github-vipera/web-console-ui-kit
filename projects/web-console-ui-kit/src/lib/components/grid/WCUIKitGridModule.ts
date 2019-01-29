import { WCLoadingOverlayComponent } from './loading-overlay/loading-overlay-component';
import { WCEditService } from './edit-service/wc-edit-service';
import { NgModule } from '@angular/core';
import { WCGridEditorCommandsGroupComponent } from './grid-editor-commands-group/grid-editor-commands-group-component';
import { WCGridEditorCommandComponent } from './grid-editor-command/grid-editor-command-component';
import { WCGridButtonEditorComponent } from './grid-editor/WCGridButtonEditorComponent';
import { CommonModule } from "@angular/common";
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';

@NgModule({
    imports: [
        CommonModule,
        FontAwesomeModule
    ],
    entryComponents: [
    ],
    declarations: [
        WCGridEditorCommandsGroupComponent, 
        WCGridEditorCommandComponent, 
        WCGridButtonEditorComponent,
        WCLoadingOverlayComponent
    ],
    exports: [ 
        WCGridEditorCommandsGroupComponent, 
        WCGridEditorCommandComponent, 
        WCGridButtonEditorComponent,
        WCLoadingOverlayComponent
    ],
    providers: [
        WCEditService
    ]

  })
  export class WCUIKitGridModule { }



