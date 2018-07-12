import { Injectable } from '@angular/core';
import { MotifConnectorService } from 'web-console-core'
import { WAGlobals } from '../../WAGlobals'
import { String, StringBuilder } from 'typescript-string-operations'

const DOMAINS_LIST_ENDPOINT =  WAGlobals.API_ENDPOINT_PRFIX + "/platform/domains"
const DOMAIN_CREATE_ENDPOINT =  WAGlobals.API_ENDPOINT_PRFIX + "/platform/domains"
const DOMAIN_DELETE_ENDPOINT =  WAGlobals.API_ENDPOINT_PRFIX + "/platform/domains/{0}"

export class Domain {
    public name:string;
    public description:string;
}

@Injectable({
  providedIn: 'root'
})
export class DomainsService {

  constructor(private motifConnector: MotifConnectorService) {
    console.log("MotifConnectorService=", motifConnector);
  }

  getDomainList(): Promise<Array<Domain>>{
    return new Promise<Array<Domain>>((resolve,reject) => {
      this.motifConnector.get(DOMAINS_LIST_ENDPOINT).subscribe((data) => {
          console.log("Get Domain List done: ",data);
          resolve(data);
      },reject);
    });
  }

  createDomain(domain:Domain):Promise<void> {
    return new Promise<void>((resolve,reject) => {
      this.motifConnector.post(DOMAINS_LIST_ENDPOINT, {
        "description": domain.description,
        "name": domain.name
      }).subscribe((data) => {
          console.log("Add new Domain done: ",data);
          resolve(data);
      },reject);
    });
  }

  deleteDomain(domainName:string):Promise<void> {
    return new Promise<void>((resolve,reject) => {
      this.motifConnector.delete(String.Format(DOMAIN_DELETE_ENDPOINT, domainName)).subscribe((data) => {
          console.log("Domain deleted: ",data);
          resolve(data);
      },reject);
    });
  }

}

