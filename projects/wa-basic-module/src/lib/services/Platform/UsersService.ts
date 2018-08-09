import { Injectable } from '@angular/core';
import { MotifConnectorService } from 'web-console-core'
import { WAGlobals } from '../../WAGlobals'
import { String, StringBuilder } from 'typescript-string-operations'
import { MotifQueryService, MotifQueryFilter, MotifQuerySort } from 'web-console-core';
import { StatusBarService } from 'web-console-core'

const USERS_LIST_ENDPOINT =  WAGlobals.API_ENDPOINT_PRFIX + "/platform/domains/{0}/users"

export class User {
  public created:number;
  public domain:string;
  public email:string;
  public lastLogin:number;
  public locale:string;
  public msisdn:string;
  public prevState:string;
  public serial:string;
  public state:string;
  public userId:string;
  public userIdInt:string;
  constructor() {
  }

}

@Injectable({
  providedIn: 'root'
})
export class UsersService {

  constructor(private motifConnector: MotifConnectorService, private motifQueryService: MotifQueryService, private sbService:StatusBarService) {
    console.log("MotifConnectorService=", motifConnector);
  }

  /*  
  getUsersList(domain:string): Promise<Array<User>>{
    return new Promise<Array<User>>((resolve,reject) => {
      let endpoint = String.Format(USERS_LIST_ENDPOINT, domain);
      this.motifConnector.get(endpoint).subscribe((data) => {
          console.log("Get Users List done: ",data);
          resolve(data);
      },reject);
    });
  }
  */

  getUsersList(domain:string): Promise<Array<User>>{
    return new Promise<Array<User>>((resolve,reject) => {
      
      this.sbService.setBusyIndicatorVisibile(true);

      let endpoint = String.Format(USERS_LIST_ENDPOINT, domain);
      let pageIndex = 1;
      let pageSize = 4;

      let sort = new MotifQuerySort();
      sort.orderDescendingBy("userId");

      let filter =  new MotifQueryFilter();
      //filter.like("userId", "*");
      
      this.motifQueryService.query(endpoint, pageIndex, pageSize, sort, filter).subscribe((queryResponse) => {
          console.log("Get Users List done: ",queryResponse);
          resolve(queryResponse.data);
          this.sbService.setBusyIndicatorVisibile(false);
        },reject);
    });
  }


}

