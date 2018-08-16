import { Component, ElementRef, OnInit, OnDestroy, AfterViewInit, HostListener, Directive, Output, EventEmitter, Input } from '@angular/core';


@Component({
  selector: 'wc-main-menu',
  templateUrl: './wc-main-menu.component.html',
  styleUrls: [ './wc-main-menu.component.scss' ]
})
export class WCMainMenuComponent implements OnInit, OnDestroy, AfterViewInit {

    constructor(private elementRef:ElementRef){}

    @Input()
    public visible:boolean=true;

    ngOnInit(){
        console.log("WCMainMenuComponent elementRef:",this.elementRef.nativeElement)
    }

    ngOnDestroy(){}

    ngAfterViewInit(){}

    @HostListener('document:click', ['$event'])
    clickout(event) {
        if(this.elementRef.nativeElement.contains(event.target)) {
            console.log("WCMainMenuComponent clicked inside:",this.elementRef.nativeElement)
        } else {
            //this.hide();
            console.log("WCMainMenuComponent clicked outside:",this.elementRef.nativeElement)
        }
    }

    @HostListener('document:keydown', ['$event'])
    handleKeyboardEvent(event: KeyboardEvent) {
        if (this.visible){
            console.log("WCMainMenuComponent key down:",this.elementRef.nativeElement)
            let x = event.keyCode;
            if (x === 27) {
                this.hide();
            }
        }
    }

    public show():void{
        this.visible = true;
    }

    public hide():void{
        this.visible = false;
    }

    onMenuClicked(menuItem:string):void{
        this.hide();
        alert("Menu clicked: " + menuItem);
    }
}
