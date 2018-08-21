import { NgModule, ModuleWithProviders, SkipSelf, Optional } from '@angular/core';
import { Configuration } from './configuration';
import { HttpClient } from '@angular/common/http';


import { AdminsService } from './api/admins.service';
import { AppinstancesService } from './api/appinstances.service';
import { ApplicationsService } from './api/applications.service';
import { ChannelsService } from './api/channels.service';
import { ClientsService } from './api/clients.service';
import { DomainsService } from './api/domains.service';
import { LocalesService } from './api/locales.service';
import { SystemService } from './api/system.service';
import { UsersService } from './api/users.service';

@NgModule({
  imports:      [],
  declarations: [],
  exports:      [],
  providers: [
    AdminsService,
    AppinstancesService,
    ApplicationsService,
    ChannelsService,
    ClientsService,
    DomainsService,
    LocalesService,
    SystemService,
    UsersService ]
})
export class ApiModule {
    public static forRoot(configurationFactory: () => Configuration): ModuleWithProviders {
        return {
            ngModule: ApiModule,
            providers: [ { provide: Configuration, useFactory: configurationFactory } ]
        };
    }

    constructor( @Optional() @SkipSelf() parentModule: ApiModule,
                 @Optional() http: HttpClient) {
        if (parentModule) {
            throw new Error('ApiModule is already loaded. Import in your base AppModule only.');
        }
        if (!http) {
            throw new Error('You need to import the HttpClientModule in your AppModule! \n' +
            'See also https://github.com/angular/angular/issues/20575');
        }
    }
}
