 
 import { Component, OnInit, Input } from '@angular/core';

 @Component({
   selector: 'wc-slide-down-panel',
   templateUrl: './wc-slide-down-panel.component.html',
   styleUrls: [ './wc-slide-down-panel.component.css' ]
 })
 export class WCSlideDownPanelComponent implements OnInit {
   
   private _class:string;
   private _closedClass:string="closed";

   constructor() { }
 
   ngOnInit() {
   }
 
   get class():any {
     return this._class;
   }
 
   @Input() set class(value:any) {
     this._class = value;
   }

   get closedClass():string {
    return this._closedClass;
  }

   public close():void{
       this._closedClass = "closed";
   }

   public open():void{
      this._closedClass = "";
   }

   public toggle():void{
       if (this.isClosed()){
           this.open()
       } else {
            this.close()
       }
   }

   public isClosed():boolean{
       return (this._closedClass === "closed");
   }

 }
 