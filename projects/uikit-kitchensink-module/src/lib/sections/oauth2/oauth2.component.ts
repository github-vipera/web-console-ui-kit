import { Component, OnInit, ViewChild, Input } from '@angular/core';
import { PluginView } from 'web-console-core'
import { WCToasterService } from 'web-console-ui-kit'
import { SortDescriptor, orderBy, GroupDescriptor, process, DataResult } from '@progress/kendo-data-query';
import { PageChangeEvent, GridComponent } from '@progress/kendo-angular-grid';
import { MotifQueryFilter, MotifQuerySort, MotifQueryResults, MotifQueryService, MotifPagedQuery } from 'web-console-core';
import { Oauth2Service, OAuthRequest, RefreshTokenList, AccessTokenList, RefreshToken, AccessToken } from '@wa-motif-open-api/oauth2-service'
import { DomainsService, DomainsList, Domain } from '@wa-motif-open-api/platform-service'
import { String, StringBuilder } from 'typescript-string-operations'
import { HttpParams } from '@angular/common/http';
import * as _ from 'lodash';
//import { WAGlobals } from '../../WAGlobals'

const REFRESH_TOKENS_LIST_ENDPOINT = "/oauth2/domains/{0}/refreshTokens"

@Component({
  selector: 'wa-oauth2',
  styleUrls: [ './oauth2.component.scss' ],
  templateUrl: './oauth2.component.html'
})
@PluginView("OAuth2 Tokens",{
  iconName: "wa-ico-users" 
})
export class OAuth2TokensListComponent implements OnInit {

  @ViewChild(GridComponent) _grid : GridComponent;

  //Data
  public refreshTokenList: RefreshTokenList = [];
  public accessTokenList: AccessTokenList = [];
  public domainList: DomainsList = [];
  public _selectedDomain:Domain; //combo box selection

  //Grid Options
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
  public isLoading:boolean;
  public progressValue:number;
  private progressInterval;
  private timeLeft: number = 60;
  public progressTitle:string;

  constructor(private oauth2Service: Oauth2Service,  
    private domainsService:DomainsService,
    private motifQueryService: MotifQueryService,
    private toaster: WCToasterService) {
    console.log("oauth2Service=", oauth2Service);
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

  public pageChange({ skip, take }: PageChangeEvent): void {
    this.skip = skip;
    this.pageSize = take;
    let newPageIndex = this.calculatePageIndex(skip, take);
    this.loadData(this._selectedDomain.name,newPageIndex, this.pageSize);
  }

  private loadData(domain:string, pageIndex:number, pageSize:number){
    if (this._selectedDomain){
      this.isLoading = true;
      console.log("loadData pageIndex=" + pageIndex +" pageSize="+pageSize);

      let sort:MotifQuerySort = this.buildQuerySort();
           
      this.oauth2Service.getRefreshTokenList(this._selectedDomain.name, pageIndex, pageSize, sort.encode(new HttpParams()).get('sort'), 'response', false).subscribe((response)=>{

        let results:MotifQueryResults = MotifQueryResults.fromHttpResponse(response);
        this.refreshTokenList = _.forEach(results.data, function(element) {
          element.createTime = new Date(element.createTime);
          element.expiryTime = new Date(element.expiryTime);
        });
        this.totalPages = results.totalPages;
        this.totalRecords = results.totalRecords;
        this.currentPage = results.pageIndex;
        this.gridView = {
          data: this.refreshTokenList,
          total: results.totalRecords
        }
        this.currentPage = results.pageIndex;
        this.isLoading = false;

      }, error=>{
        console.log("MotifPagedQueryInterceptor test query error: ", error);
        this.isLoading = false;
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

  onDeleteOKPressed(dataItem:any):void {
    let oauthReq:OAuthRequest = {
      clientId : '123456789',
      token : dataItem.token,
      tokenType : 'REFRESH_TOKEN'
    }
    
    this.oauth2Service.revoke(oauthReq).subscribe(value => {
      this.refreshData();
      this.toaster.info("Refresh token revoked!", "Attention Please", {
        positionClass: 'toast-top-center'
      });
      }, error => {
        this.toaster.warning("Refresh token could not be removed.", "Attention Please", {
          positionClass: 'toast-top-center'
        });
    })
  }

  onDeleteCancelPressed(dataItem:any):void {
  }

  onShowOverlay(){
    this.isLoading = true;
    this.progressValue = 0;
    this.progressInterval = setInterval(() => {
      this.progressValue++;
      this.progressTitle = "Progress of: " + this.progressValue;
      if (this.progressValue===100){
        //this.isLoading = false;
        clearInterval(this.progressInterval);
      }
    },50)
  }
  

}
