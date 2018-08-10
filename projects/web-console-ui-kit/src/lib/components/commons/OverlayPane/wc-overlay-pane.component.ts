import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'wc-overlay-pane',
  templateUrl: './wc-overlay-pane.component.html',
  styleUrls: ['./wc-overlay-pane.component.scss']
})
export class WCOverlayPane implements OnInit {
  
  @Input('displayClass') displayClass:string = "hidden";

  constructor() { }

  ngOnInit() {
  }

  public setVisible(visible:boolean):void {
    if (visible){
      this.displayClass = "visible";
    } else {
      this.displayClass = "hidden";
    }
  }

  onPaneClicked(){
    this.setVisible(false);    
  }

}
