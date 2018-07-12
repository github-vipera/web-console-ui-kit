import { Injectable} from '@angular/core';
import { ToastrService } from 'ngx-toastr';

//See https://scttcper.github.io/ngx-toastr/

@Injectable({
  providedIn: 'root'
})
export class WCToasetrService {


  constructor(private toastr: ToastrService) {
    console.log("WCToasetrService");
  }

  /**
   * 
   * @param message See https://github.com/scttcper/ngx-toastr
   * @param title 
   * @param options 
   */
  public success(message:string, title:string, options?:any):void {
    this.toastr.success(message, title, options);
  }

  /**
   * 
   * @param message See https://github.com/scttcper/ngx-toastr
   * @param title 
   * @param options 
   */
  public info(message:string, title:string, options?:any):void {
    this.toastr.info(message, title, options);
  }

    /**
   * 
   * @param message See https://github.com/scttcper/ngx-toastr
   * @param title 
   * @param options 
   */
  public error(message:string, title:string, options?:any):void {
    this.toastr.error(message, title, options);
  }

    /**
   * 
   * @param message See https://github.com/scttcper/ngx-toastr
   * @param title 
   * @param options 
   */
  public warning(message:string, title:string, options?:any):void {
    this.toastr.warning(message, title, options);
  }

  /**
   * 
   * @param message See https://github.com/scttcper/ngx-toastr
   * @param title 
   * @param options 
   */
  public clear():void {
    this.toastr.clear();
  }

}

