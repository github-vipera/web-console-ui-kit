import { WCEditService } from './edit-service/wc-edit-service';
import { NgModule } from '@angular/core';
import { WCGridEditorCommandsGroupComponent } from './grid-editor-commands-group/grid-editor-commands-group-component';
import { WCGridEditorCommandComponent } from './grid-editor-command/grid-editor-command-component';
import { WCGridButtonEditorComponent } from './grid-editor/WCGridButtonEditorComponent';
import { CommonModule } from "@angular/common";

@NgModule({
    imports: [
        CommonModule
    ],
    entryComponents: [
    ],
    declarations: [
        WCGridEditorCommandsGroupComponent, 
        WCGridEditorCommandComponent, 
        WCGridButtonEditorComponent
    ],
    exports: [ 
        WCGridEditorCommandsGroupComponent, 
        WCGridEditorCommandComponent, 
        WCGridButtonEditorComponent
    ],
    providers: [
        WCEditService
    ]

  })
  export class WCGridModule { }



