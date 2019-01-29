import { Component, Input, Output, EventEmitter } from '@angular/core';

import * as uuidv1_ from 'uuid/v1';
const uuidv1 = uuidv1_;

export enum WCGridEditorCommandComponentEventType {
    Click,
    Confirm,
    Cancel,
    Ask
}

export interface WCGridEditorCommandComponentEvent {
    id: string;
    uid: string;
    actionDisplay?: boolean;
    rowData: {
        dataItem?: any;
        rowIndex?: number;
        columnIndex?: number;
        column?: number;
        value?: any;
    }
}

export interface WCConfirmationTitleProvider {
    getTitle(rowData): string;
}

@Component({
    selector: 'wc-grid-editor-command',
    styleUrls: [ './grid-editor-command-component.scss' ],
    templateUrl: './grid-editor-command-component.html'
})
export class WCGridEditorCommandComponent {

    //@Input() disabled: boolean;
    @Input() title:string;
    @Input() hasConfirmation: boolean;
    @Input() confirmationTitle: string;
    @Input() confirmationTitleProvider: WCConfirmationTitleProvider;
    @Input() commandIcon: string;
    @Input() commandId: string;
    @Input() public alignMode = 'center';
    // row data
    @Input() dataItem:any;
    @Input() rowIndex:number;
    @Input() columnIndex:number;
    @Input() column:number;
    @Input() value:any;
    

    @Output() commandClick: EventEmitter<WCGridEditorCommandComponentEvent> = new EventEmitter();
    @Output() commandConfirm: EventEmitter<WCGridEditorCommandComponentEvent> = new EventEmitter();
    @Output() commandCancel: EventEmitter<WCGridEditorCommandComponentEvent> = new EventEmitter();
    @Output() actionStatusChange: EventEmitter<WCGridEditorCommandComponentEvent> = new EventEmitter();
    

    controlUID: string;
    private _actionDisplayed: boolean;
    private _disabled: boolean;

    constructor() {
        this.controlUID = 'wc-grid-editor-command-' + uuidv1();
    }

    onCheckChange(event){
        if(this.confirmationTitleProvider){
            this.confirmationTitle = this.confirmationTitleProvider.getTitle(this.dataItem);
        }
        this._actionDisplayed = event.target.checked;
        this.actionStatusChange.emit({
            id: this.commandId,
            uid: this.controlUID,
            actionDisplay: this._actionDisplayed,
            rowData: {
                dataItem: this.dataItem,
                rowIndex: this.rowIndex,
                columnIndex: this.columnIndex,
                column: this.column,
                value: this.value
            }
        })
    }

    onCommandClick(event) {
        if (!this.disabled){
            this.commandClick.emit({
                id: this.commandId,
                uid: this.controlUID,
                rowData: {
                    dataItem: this.dataItem,
                    rowIndex: this.rowIndex,
                    columnIndex: this.columnIndex,
                    column: this.column,
                    value: this.value
                }
            })
        }
    }

    onConfirm(event){
        this.commandConfirm.emit({
            id: this.commandId,
            uid: this.controlUID,
            rowData: {
                dataItem: this.dataItem,
                rowIndex: this.rowIndex,
                columnIndex: this.columnIndex,
                column: this.column,
                value: this.value
            }
        })
    }

    onCancel(event) {
        this.commandCancel.emit({
            id: this.commandId,
            uid: this.controlUID,
            rowData: {
                dataItem: this.dataItem,
                rowIndex: this.rowIndex,
                columnIndex: this.columnIndex,
                column: this.column,
                value: this.value
            }
        })
    }

    @Input() get disabled(): boolean {
        return this._disabled;
    }

    set disabled(disabled: boolean) {
        this._disabled = disabled;
    }

    public get enabled(): boolean {
        return !this.disabled;
    }
    
}
