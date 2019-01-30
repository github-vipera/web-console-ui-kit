import { WCErrorMessageBuilderService } from './wc-error-message-builder-service';
import { WCNotificationCenter } from './wc-notification-center';
import { WCToasterUtilsService } from './wc-toaster-utils-service';
import { NgModule } from '@angular/core';
import { LoggerModule } from 'ngx-logger';
import { NotificationModule } from '@progress/kendo-angular-notification';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { LayoutModule } from '@progress/kendo-angular-layout';

@NgModule({
    imports: [
        LoggerModule,
        NotificationModule,
        FontAwesomeModule,
        LayoutModule
    ],
    entryComponents: [
    ],
    declarations: [
    ],
    exports: [ 
    ],
    providers: [
        WCToasterUtilsService, WCErrorMessageBuilderService, WCNotificationCenter
    ]

  })
  export class WCNotificationCenterModule { }



