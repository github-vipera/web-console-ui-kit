 
import { Component, OnInit, ElementRef, Renderer2, ViewChild, EventEmitter,Output } from '@angular/core';

 @Component({
   selector: 'wc-slide-panel',
   templateUrl: './slide-panel-component.html',
   styleUrls: [ './slide-panel-component.scss' ]
 })
 export class WCSlidePanelComponent implements OnInit {

   @ViewChild('slideDownContainer') slideDownContainer: ElementRef;

    @Output() close: EventEmitter<WCSlidePanelComponent> = new EventEmitter<WCSlidePanelComponent>();
    @Output() open: EventEmitter<WCSlidePanelComponent> = new EventEmitter<WCSlidePanelComponent>();

   constructor(private renderer2: Renderer2, 
    private element: ElementRef) { }
 
   ngOnInit() {
   }

   public get isOpen(): boolean {
        return !this.slideDownContainer.nativeElement.classList.contains('closed'); 
   }

   public toggle(): void {
    this.show(!this.isOpen);
   }

    /**
     *
     * @param show Show/Hide the new Slide down panel
     */
    public show(show: boolean): void {
        if (show) {
            this.renderer2.removeClass(this.slideDownContainer.nativeElement, 'closed');
            this.open.emit(this);
        } else {
            this.renderer2.addClass(this.slideDownContainer.nativeElement, 'closed');
            this.close.emit(this);
        }
    }

 }
 