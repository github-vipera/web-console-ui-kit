import {NgModule} from '@angular/core'
import { WebConsoleCoreModule } from 'web-console-core'
import { WebConsoleLoginModule } from 'web-console-login'
import { WABasicModule } from 'wa-basic-module'


@NgModule({
    imports:[ WebConsoleCoreModule.withConfig({loginRoute:"login",dashboardRoute:"dashboard"}), WebConsoleLoginModule, WABasicModule],
    exports:[ WebConsoleCoreModule, WebConsoleLoginModule, WABasicModule ]
})
export class WebAdminModulesProvider {
    
}