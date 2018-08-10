import { Injectable,
    Injector,
    ComponentFactoryResolver,
    EmbeddedViewRef,
    ApplicationRef} from '@angular/core';

import { WCOverlayPane } from '../../components/commons/OverlayPane/wc-overlay-pane.component'

@Injectable({
  providedIn: 'root'
})
export class WCOverlayPaneService {

    private _overlayComp:any = null;

  constructor(private componentFactoryResolver: ComponentFactoryResolver,
    private appRef: ApplicationRef,
    private injector: Injector) {
    console.log("WCOverlayPaneService");
    this.initOverlay();
  }

  private initOverlay(){
    this._overlayComp = this.appendComponentToBody(WCOverlayPane);
  }

  private appendComponentToBody(component: any):any {
    // 1. Create a component reference from the component 
    const componentRef = this.componentFactoryResolver
      .resolveComponentFactory(component)
      .create(this.injector);

    // 2. Attach component to the appRef so that it's inside the ng component tree
    this.appRef.attachView(componentRef.hostView);
    
    // 3. Get DOM element from component
    const domElem = (componentRef.hostView as EmbeddedViewRef<any>)
      .rootNodes[0] as HTMLElement;
    
    // 4. Append DOM element to the body
    document.body.appendChild(domElem);

    return componentRef.instance;
  }

  public setVisible(visible:boolean){
      this._overlayComp.setVisible(visible);
  }
  
}

