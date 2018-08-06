import { Directive, OnInit, ElementRef, Input, TemplateRef, ViewContainerRef } from '@angular/core';

@Directive({
  selector: '[vpRedblack]'
})
export class RedblackDirective {

  @Input() vpRedblackVisible: boolean;

  constructor(private element: ElementRef,
      private templateRef: TemplateRef<any>,
      private viewContainer: ViewContainerRef) {
    console.log("******************************** RedblackDirective constructor")
  }

  ngOnInit(){
    console.log("******************************** RedblackDirective ngOnInit 2 " + this.vpRedblackVisible+ " =>" + (this.vpRedblackVisible==true) + " typeof=" + typeof(this.vpRedblackVisible))
    if(this.vpRedblackVisible) {
      this.viewContainer.createEmbeddedView(this.templateRef);
    } else {
      this.viewContainer.clear();
    }
  }


}
