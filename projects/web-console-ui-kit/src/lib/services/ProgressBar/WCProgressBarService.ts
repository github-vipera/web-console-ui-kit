import { Injectable} from '@angular/core';
import {SlimLoadingBarService} from 'ng2-slim-loading-bar';
import { resolve } from 'dns';

//See https://github.com/akserg/ng2-slim-loading-bar

@Injectable({
  providedIn: 'root'
})
export class WCProgressBarService {


    constructor(private slimLoadingBarService: SlimLoadingBarService) {
        console.log("WCToasterSeWCProgressBarServicervice");
    }

    start():Promise<void> {
        return new Promise((resolve, reject)=>{
            this.slimLoadingBarService.start(() => {
                resolve();
            });
        })
    }

    stop() {
        this.slimLoadingBarService.stop();
    }

    complete() {
        this.slimLoadingBarService.complete();
    }   

}

