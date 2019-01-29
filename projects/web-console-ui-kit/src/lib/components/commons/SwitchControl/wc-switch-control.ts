import { Component, AfterContentInit, Input, Output, EventEmitter, forwardRef  } from '@angular/core';
import { NG_VALUE_ACCESSOR } from '@angular/forms';

import * as uuidv1_ from 'uuid/v1';
const uuidv1 = uuidv1_;
import { THIS_EXPR } from '@angular/compiler/src/output/output_ast';

const noop = () => {
};

export const WC_SWITCH_CONTROL_VALUE_ACCESSOR: any = {
    provide: NG_VALUE_ACCESSOR,
    useExisting: forwardRef(() => WCSwitchControl),
    multi: true
};


@Component({
    selector: 'wc-switch-control',
    templateUrl: './wc-switch-control.html',
    styleUrls: [ './wc-switch-control.scss' ],
    providers: [WC_SWITCH_CONTROL_VALUE_ACCESSOR]
  })
export class WCSwitchControl implements AfterContentInit {
    
    private _value : boolean = false;
    @Output() change: EventEmitter<boolean> = new EventEmitter();
    @Output() propertyChange: EventEmitter<any> = new EventEmitter();

    private _id:string;

    //Placeholders for the callbacks which are later provided
    //by the Control Value Accessor
    private onTouchedCallback: () => void = noop;
    private onChangeCallback: (_: any) => void = noop;

    constructor(){
        this._id = "wc-switch-" + uuidv1();
    }

    ngAfterContentInit(){
      console.log("WCSwitchControl");
    }

    onModelChanged(event:any):void {
        this.change.emit(event);
    }

    onPropertyChange(event:any):void {
        this.propertyChange.emit(event);
    }

      //get accessor
    get value(): any {
        return this._value;
    };

    //set accessor including call the onchange callback
    set value(v: any) {
        if (v !== this._value) {
            this._value = v;
            this.onChangeCallback(v);
        }
    }

    get id():string {
        return this._id;
    }

    //From ControlValueAccessor interface
    writeValue(value: any) {
        if (value !== this._value) {
            this._value = value;
        }
    }

    //From ControlValueAccessor interface
    registerOnChange(fn: any) {
        this.onChangeCallback = fn;
    }

    //From ControlValueAccessor interface
    registerOnTouched(fn: any) {
        this.onTouchedCallback = fn;
    }

} 