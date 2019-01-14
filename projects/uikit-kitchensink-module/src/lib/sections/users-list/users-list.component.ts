import { Component, OnInit, ViewChild, Input } from '@angular/core';
import { PluginView } from 'web-console-core'
//import { UsersService, User } from '../../services/Platform/UsersService';
//import { DomainsService, Domain } from '../../services/Platform/DomainsService';
import { WCGridConfiguration, WCGridColumnType, WCToasterService } from 'web-console-ui-kit'
import { SortDescriptor, orderBy, GroupDescriptor, process, DataResult } from '@progress/kendo-data-query';
import { PageChangeEvent, GridComponent } from '@progress/kendo-angular-grid';
import { MotifQueryFilter, MotifQuerySort, MotifQueryResults, MotifQueryService, MotifPagedQuery } from 'web-console-core';
import { WCSlideDownPanelComponent } from 'web-console-ui-kit'
import { WCOverlayPaneService } from 'web-console-ui-kit'
import { DomainsService, DomainsList, Domain, UsersService, UsersList } from '@wa-motif-open-api/platform-service'
import { String, StringBuilder } from 'typescript-string-operations'
import { HttpParams } from '@angular/common/http';
import * as _ from 'lodash';
//import { WAGlobals } from '../../WAGlobals'

const USERS_LIST_ENDPOINT = "/platform/domains/{0}/users"
const CREATE_USER_ENDPOINT = "/platform/domains/{0}/users"

export interface NewUserModel {
  userId?:string,
  userIdInt?:number, 
  msisdn?:number, 
  serial?:number
}

@Component({
  selector: 'wa-users-list',
  styleUrls: [ './users-list.component.scss' ],
  templateUrl: './users-list.component.html'
})
@PluginView("Users List",{
  iconName: "ico-users" 
})
export class UsersListComponent implements OnInit {

  @ViewChild(GridComponent) _grid : GridComponent;
  @ViewChild(WCSlideDownPanelComponent) _slideDownEditor : WCSlideDownPanelComponent;

  //Data
  public usersList: UsersList = [];
  public domainList: DomainsList = [];
  public _selectedDomain:Domain; //combo box selection

  //Grid Options
  public gridConfiguration:WCGridConfiguration;
  public sort: SortDescriptor[] = [];
  public groups: GroupDescriptor[] = [];
  public gridView: DataResult;
  public type: 'numeric' | 'input' = 'numeric';
  public pageSize = 15;
  public skip = 0;
  public currentPage = 1;
  public totalPages = 0;
  public totalRecords = 0;
  public isFieldSortable=false;


  //new user form
  @Input('newUserId') newUserId:string = "";
  @Input('newUserModel') newUserModel:NewUserModel={};

  constructor(private usersService: UsersService,  
    private domainsService:DomainsService,
    private motifQueryService: MotifQueryService,
    private toaster: WCToasterService, 
    private overlayPaneService: WCOverlayPaneService) {
    console.log("usersService=", usersService);

    this.gridConfiguration = {
      columns: [
        { label: "Domain", name:"domain", sortable:false },
        { label: "User ID", name:"userId", sortable:true },
        { label: "State", name:"state", sortable:true },
        { label: "", name:"", sortable:true, type: WCGridColumnType.Command },
      ]
    }
  }

  ngOnInit() {
    this.refreshDomainList();
  }

  /**
   * Get the list of the available Domains
   */
  public refreshDomainList():void {
    this.domainsService.getDomains().subscribe(data=>{
      this.domainList = data;
    }, error=>{
      console.error("Error: ", error);
    });
  } 

  /*
  private createTestDomains():void{
    this.domainsService.deleteDomain("NewDomain").then((data)=>{
      console.log(">>>>>>>>>>>>>>> deleteDomain OK: ", data);
    }, (error)=>{
      console.error(">>>>>>>>>>>>>>> deleteDomain ERROR: ", error);
    })
    
    this.domainsService.createDomain({name:"NewDomain",description:"My new domain"}).then((data)=>{
      console.log(">>>>>>>>>>>>>>> createDomain OK: ", data);
    }, (error)=>{
      console.error(">>>>>>>>>>>>>>> createDomain ERROR: ", error);
    });

  }
  */  

  /*
  private createTestUsers():void {
    this.usersService.createNewUser('Default', 'joe', 123456,12345678, 12345678, "ACTIVE").then(()=>{
      console.log("Created");
    }, (error)=>{
      console.log("Error:", error);
    })
    this.usersService.createNewUser('Default', 'john', 123457,12345679, 12345679, "ACTIVE").then(()=>{
      console.log("Created");
    }, (error)=>{
      console.log("Error:", error);
    })
    this.usersService.createNewUser('Default', 'paul', 123458,12345680, 12345680, "ACTIVE").then(()=>{
      console.log("Created");
    }, (error)=>{
      console.log("Error:", error);
    })
    this.usersService.createNewUser('Default', 'carl', 123459,12345681, 12345681, "ACTIVE").then(()=>{
      console.log("Created");
    }, (error)=>{
      console.log("Error:", error);
    })
    this.usersService.createNewUser('Default', 'susy', 123460,12345682, 12345682, "ACTIVE").then(()=>{
      console.log("Created");
    }, (error)=>{
      console.log("Error:", error);
    })
    this.usersService.createNewUser('Default', 'pauline', 123461,12345683, 12345683, "ACTIVE").then(()=>{
      console.log("Created");
    }, (error)=>{
      console.log("Error:", error);
    })
    this.usersService.createNewUser('Default', 'margot', 123462,12345684, 12345684, "ACTIVE").then(()=>{
      console.log("Created");
    }, (error)=>{
      console.log("Error:", error);
    })
    this.usersService.createNewUser('Default', 'sandra', 123463,12345685, 12345685, "ACTIVE").then(()=>{
      console.log("Created");
    }, (error)=>{
      console.log("Error:", error);
    })
    this.usersService.createNewUser('Default', 'lisa', 123464,12345686, 12345686, "ACTIVE").then(()=>{
      console.log("Created");
    }, (error)=>{
      console.log("Error:", error);
    })
    this.usersService.createNewUser('Default', 'maria', 123465,12345687, 12345687, "ACTIVE").then(()=>{
      console.log("Created");
    }, (error)=>{
      console.log("Error:", error);
    })
    this.usersService.createNewUser('Default', 'robert', 123466,12345688, 12345688, "ACTIVE").then(()=>{
      console.log("Created");
    }, (error)=>{
      console.log("Error:", error);
    })
  }
  */

  public pageChange({ skip, take }: PageChangeEvent): void {
    this.skip = skip;
    this.pageSize = take;
    let newPageIndex = this.calculatePageIndex(skip, take);
    this.loadData(this._selectedDomain.name,newPageIndex, this.pageSize);
  }

  private loadData(domain:string, pageIndex:number, pageSize:number){
    if (this._selectedDomain){
      console.log("loadData pageIndex=" + pageIndex +" pageSize="+pageSize);

      let sort:MotifQuerySort = this.buildQuerySort(); 
      
      let pagedQuery:MotifPagedQuery = new MotifPagedQuery();
      pagedQuery.pageIndex = pageIndex;
      pagedQuery.pageSize = pageSize;
      pagedQuery.sort = sort;
      
      this.usersService.getUsersList(domain, null, null, null, pageIndex, pageSize, sort.encode(new HttpParams()).get('sort'), "response", false).subscribe((response)=>{


        let results:MotifQueryResults = MotifQueryResults.fromHttpResponse(response);
        this.usersList = _.forEach(results.data, function(element) {
          element.created = new Date(element.created);
          element.lastLogin = new Date(element.lastLogin);
        });
        this.totalPages = results.totalPages;
        this.totalRecords = results.totalRecords;
        this.currentPage = results.pageIndex;
        this.gridView = {
          data: this.usersList,
          total: results.totalRecords
        }
        this.currentPage = results.pageIndex;

      }, error=>{
        console.log("MotifPagedQueryInterceptor test query error: ", error);
      });

      /*
      this.getUserListEx(domain, pageIndex, pageSize, sort, null).then((results)=>{
        console.log("Data received: ", results.data);
        this.usersList = results.data;
        this.totalPages = results.totalPages;
        this.totalRecords = results.totalRecords;
        this.currentPage = results.pageIndex;
        this.gridView = {
          data: this.usersList,
          total: results.totalRecords
        }
        this.currentPage = results.pageIndex;
        },(error)=>{
        console.error("Error: ", error);
      });
      */

    }
  }

  private getUserListEx(domain:string, pageIndex:number, pageSize:number, sort:MotifQuerySort, filter:MotifQueryFilter):Promise<MotifQueryResults>{
    return new Promise<MotifQueryResults>((resolve,reject) => {
      let endpoint = String.Format(USERS_LIST_ENDPOINT, domain);
      this.motifQueryService.query(endpoint, pageIndex, pageSize, sort, filter).subscribe((queryResponse) => {
          console.log("Get Users List done: ",queryResponse);
          resolve(queryResponse);
        },reject);
    });
  }

  private calculatePageIndex(skip:number, take:number):number {
    return (skip/take)+1;
  }

  private buildQuerySort():MotifQuerySort {
    console.log("*****SORT ", this.sort);
    let querySort = new MotifQuerySort();
    if (this.sort){
      for (let i=0;i<this.sort.length;i++){
        let sortInfo = this.sort[i];
        if (sortInfo.dir && sortInfo.dir === "asc"){
          querySort.orderAscendingBy(sortInfo.field);
        } else if (sortInfo.dir && sortInfo.dir === "desc"){
          querySort.orderDescendingBy(sortInfo.field);
        }
      }
    }
    return querySort;
  }

  /**
   * Reload the list of users for the selected domain
   */
  public refreshData():void{
    this.loadData(this._selectedDomain.name, this.currentPage, this.pageSize);
  }

  /**
   * Set the selcted domain
   */
  @Input()
  public set selectedDomain(domain:Domain){
    this._selectedDomain = domain;
    if (this._selectedDomain){
      this.loadData(this._selectedDomain.name, 1, this.pageSize);
    } else {
      this.gridView = undefined;
    }
  }

  public sortChange(sort: SortDescriptor[]): void {
    this.sort = sort;
    this.refreshData()
  }

  public groupChange(groups: GroupDescriptor[]): void {
    this.groups = groups;
    //TODO!!
}

  public doSort(){
    //this.gridView = process(orderBy(this.usersList, this.sort), { group: this.groups });
  }

  onStatusChangeOKPressed(dataItem:any):void{
    this.toaster.info("Not yet implemented", "Attention Please", {
      positionClass: 'toast-top-center'
    });
  }

  onStatusChangeCancelPressed(dataItem:any):void {
  }
  
  onDeleteOKPressed(dataItem:any):void {
    this.toaster.info("Not yet implemented", "Attention Please", {
      positionClass: 'toast-top-center'
    });
  }

  onDeleteCancelPressed(dataItem:any):void {
  }

  onAddButtonPressed():void {
    this._slideDownEditor.open();
  }

  onEditorDismissButtonPressed():void{
    this.dismissNewUserEditor();
  }

  onEditorConfirmButtonPressed():void{  
    /*
    let domainName = this._selectedDomain.name;
    let userId = this.newUserModel.userId;
    let userIdInt = this.newUserModel.userIdInt;
    let msisdn = this.newUserModel.msisdn;
    let serial = this.newUserModel.serial;
    this.dismissNewUserEditor();
    this.usersService.createNewUser(domainName, userId, userIdInt, msisdn, serial, "PREACTIVE").then(()=>{
      //this.overlayPaneService.setVisible(false);
      this.toaster.success("User '"+userId+"' created successfully.", "New User");
      this.refreshData();
    }, (error)=>{
      console.log("New user error: ", error);
      //this.overlayPaneService.setVisible(false);
      this.toaster.error("User '"+userId+"' creation error: " + error, "New User");
    })
    */
  }

  dismissNewUserEditor(){
    this.newUserModel = {};
    this._slideDownEditor.close();
  }

  get statusButtonClass():string{
    return "btn status-activated";
  }

  public getStatusButtonClass(statusStr:string):string{
    if (statusStr && statusStr.toUpperCase()==="ACTIVE"){
      return "btn user-status-active";
    } else if (statusStr && statusStr.toUpperCase()==="PREACTIVE"){
      return "btn user-status-preactive";
    } else {
      return "";
    }
  }

  public getStatusButtonQuestion(statusStr:string):string{
    if (statusStr && statusStr.toUpperCase()==="ACTIVE"){
      return "Suspend?";
    } else if (statusStr && statusStr.toUpperCase()==="PREACTIVE"){
      return "Activate?";
    } else {
      return "";
    }
  }
}
