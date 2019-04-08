import { Component, Input, Output, EventEmitter } from '@angular/core';
import { WCGridEditorCommandComponentEvent, WCConfirmationTitleProvider } from '../grid-editor-command/grid-editor-command-component';

//export { GridEditorCommandComponentEvent, ConfirmationTitleProvider } from '../grid-editor-command/grid-editor-command-component';

export interface WCGridEditorCommandConfig {
    commandId: string;
    commandIcon: string;
    title?: string;
    hasConfirmation?: boolean;
    confirmationTitle?: string;
    confirmationTitleProvider?:WCConfirmationTitleProvider;
    cssClass?:string;
}

export interface WCGridEditorCommandsConfig extends Array<WCGridEditorCommandConfig>{}

@Component({
    selector: 'wc-grid-editor-commands-group',
    styleUrls: [ './grid-editor-commands-group-component.scss' ],
    templateUrl: './grid-editor-commands-group-component.html'
})
export class WCGridEditorCommandsGroupComponent {

    @Input() commands: WCGridEditorCommandsConfig;
    // row data
    @Input() dataItem:any;
    @Input() rowIndex:number;
    @Input() columnIndex:number;
    @Input() column:number;
    @Input() value:any;

    @Input() public contentStyle: string;
    @Input() public alignMode = 'center';

    @Output() commandClick:EventEmitter<WCGridEditorCommandComponentEvent> = new EventEmitter<WCGridEditorCommandComponentEvent>();
    @Output() commandConfirm:EventEmitter<WCGridEditorCommandComponentEvent> = new EventEmitter<WCGridEditorCommandComponentEvent>();
    @Output() commandCancel:EventEmitter<WCGridEditorCommandComponentEvent> = new EventEmitter<WCGridEditorCommandComponentEvent>();
    @Output() actionStatusChange:EventEmitter<WCGridEditorCommandComponentEvent> = new EventEmitter<WCGridEditorCommandComponentEvent>();

    constructor() {}

    onCommandClick(event: WCGridEditorCommandComponentEvent) {
        this.commandClick.emit(event);
    }

    onCommandConfirm(event: WCGridEditorCommandComponentEvent) {
        this.commandConfirm.emit(event);
    }

    onCommandCancel(event: WCGridEditorCommandComponentEvent) {
        this.commandCancel.emit(event);
    }

    onActionStatusChange(event: WCGridEditorCommandComponentEvent) {
        this.actionStatusChange.emit(event);
    }


}
