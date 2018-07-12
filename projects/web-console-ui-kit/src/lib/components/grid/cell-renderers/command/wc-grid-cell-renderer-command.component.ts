import { Component, OnInit, Input } from '@angular/core';
import { ChangeDetectorRef } from '@angular/core';

@Component({
  selector: 'wc-grid-cell-renderer-command',
  templateUrl: './wc-grid-cell-renderer-command.component.html',
  styles: []
})
export class WCGridCellCommandComponent implements OnInit {

  private _caption:string = "Delete ?";
  private _id:string;

  constructor(private cd: ChangeDetectorRef) { }

  ngOnInit() {
  }

  @Input() set caption(value:string) {
    this._caption = value;
    this.cd.markForCheck();
  }

  get caption():string {
    return this._caption;
  }

  @Input() set id(value:string) {
    this._id = value;
    this.cd.markForCheck();
  }

  get id():string {
    return this._id;
  }

}

