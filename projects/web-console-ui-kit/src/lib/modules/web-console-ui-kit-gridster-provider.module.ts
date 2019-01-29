import { NgModule } from '@angular/core'

import * as Gridster from  'angular-gridster2'
export { Gridster }

import { GridsterModule } from 'angular-gridster2'

@NgModule({
    imports:[ GridsterModule ],
    exports:[ GridsterModule ]
})
export class WCUIKitGridsterProviderModule {
    
}

