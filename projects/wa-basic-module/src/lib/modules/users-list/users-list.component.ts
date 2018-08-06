import { Component, OnInit, Input } from '@angular/core';
import { PluginView } from 'web-console-core'
import { UsersService, User } from '../../services/Platform/UsersService';
import { DomainsService, Domain } from '../../services/Platform/DomainsService';

import { WCGridConfiguration, WCGridColumnType, WCToasterService } from 'web-console-ui-kit'
import { SortDescriptor, orderBy, GroupDescriptor, process, DataResult } from '@progress/kendo-data-query';
import { PageChangeEvent } from '@progress/kendo-angular-grid';

@Component({
  selector: 'wa-users-list',
  templateUrl: './users-list.component.html',
  styleUrls: [ './users-list.component.css' ]
})
@PluginView("Users List",{
  iconName: "ico-users" 
})
export class UsersListComponent implements OnInit {

  //Data
  public usersList: User[] = [];
  public domainList: Domain[] = [];
  public _selectedDomain:Domain; //combo box selection

  //Grid Options
  public gridConfiguration:WCGridConfiguration;
  public sort: SortDescriptor[] = [];
  public groups: GroupDescriptor[] = [];
  public gridView: DataResult;
  public buttonCount = 5;
  public info = true;
  public type: 'numeric' | 'input' = 'numeric';
  public pageSizes = true;
  public previousNext = true;
  public pageSize = 5;
  public skip = 0;
  public currentPage = 1;
  public isFieldSortable=false;

  constructor(private usersService: UsersService,  
    private domainsService:DomainsService,
    private toaster: WCToasterService) {
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
   
    /**
    this.domainsService.deleteDomain("NewDomain").then((data)=>{
      console.log(">>>>>>>>>>>>>>> deleteDomain OK: ", data);
    }, (error)=>{
      console.error(">>>>>>>>>>>>>>> deleteDomain ERROR: ", error);
    })
    **/

    
    this.domainsService.createDomain({name:"NewDomain",description:"My new domain"}).then((data)=>{
      console.log(">>>>>>>>>>>>>>> createDomain OK: ", data);
    }, (error)=>{
      console.error(">>>>>>>>>>>>>>> createDomain ERROR: ", error);
    });
    
    this.domainsService.getDomainList().then((data)=>{
      console.log("Data received: ", data);
      this.domainList = data;
    }, (error)=>{
      console.error("Error: ", error);
    });
  }

  public pageChange({ skip, take }: PageChangeEvent): void {
    this.skip = skip;
    this.pageSize = take;
    console.log("Cambiata pagina! skip=" + skip +" pageSize="+this.pageSize);
  }

  /**
   * Reload the list of users for the selected domain
   */
  public refreshUserList():void{
    if (this._selectedDomain){
      this.usersService.getUsersList(this._selectedDomain.name).then((data)=>{
        console.log("Data received: ", data);
        this.usersList = data;
        this.doSort();
      },(error)=>{
        console.error("Error: ", error);
      });
    } else {
      this.usersList = [];
      this.doSort();
    }
  }

  /**
   * Set the selcted domain
   */
  @Input()
  public set selectedDomain(domain:Domain){
    this._selectedDomain = domain;
    this.refreshUserList();
    //console.log("selectedDomain changed to: ", this._selectedDomain);
  }

  public sortChange(sort: SortDescriptor[]): void {
    this.sort = sort;
    this.doSort();
  }

  public groupChange(groups: GroupDescriptor[]): void {
    this.groups = groups;
    this.doSort();
}

  public doSort(){
    this.gridView = process(orderBy(this.usersList, this.sort), { group: this.groups });
  }

  onOKPressed():void{
    this.toaster.info("Not yet implemented", "Attention Please", {
      positionClass: 'toast-top-center'
    });
  }

  onCancelPressed():void{
  }
}
