 
 import { Component, OnInit, Input, ElementRef } from '@angular/core';

 @Component({
   selector: 'wc-tab-item',
   templateUrl: './wc-tab-item.component.html',
   styles: [
   ],
   host: {
    'class': "tab",
    '[attr.id]': 'tabId'
  }

 })
 export class WCTabItemComponent implements OnInit {

  public tabId:string = "tab-1"

  constructor(private element: ElementRef){

  }

  ngOnInit(){
  
  }

  public getNativeElement(){
    return this.element.nativeElement;
  }
} 