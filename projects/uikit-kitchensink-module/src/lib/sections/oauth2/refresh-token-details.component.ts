import { Component, OnInit, ViewChild, Input } from '@angular/core';
import { WCToasterService } from 'web-console-ui-kit'
import { SortDescriptor, orderBy, GroupDescriptor, process, DataResult } from '@progress/kendo-data-query';
import { GridDataResult, PageChangeEvent, GridComponent } from '@progress/kendo-angular-grid';
import { WCSlideDownPanelComponent } from 'web-console-ui-kit'
import { Oauth2Service, OAuthRequest, RefreshTokenList, AccessTokenList, RefreshToken, AccessToken } from '@wa-motif-open-api/oauth2-service'
import { String, StringBuilder } from 'typescript-string-operations'
import { HttpParams } from '@angular/common/http';
//import { WAGlobals } from '../../WAGlobals'

const REFRESH_TOKENS_LIST_ENDPOINT = "/oauth2/refreshTokens/{0}/accessTokens"

@Component({
  selector: 'wa-refresh-token-details',
  styleUrls: [ './refresh-token-details.component.scss' ],
  templateUrl: './refresh-token-details.component.html'
})
export class RefreshTokenDetailsComponent implements OnInit {

  @Input() public refreshToken: RefreshToken;

  //Data
  public accessTokenList: AccessTokenList = [];

  //Grid Options
  public gridView: DataResult;
  public type: 'numeric' | 'input' = 'numeric';

  constructor(private oauth2Service: Oauth2Service,  
    private toaster: WCToasterService) {
    console.log("oauth2Service=", oauth2Service);
  }

  ngOnInit() {
    this.refreshData();
  }

  private loadData(refreshToken:string){
    console.log("loadData");

    this.oauth2Service.getAccessTokenList(refreshToken).subscribe((results)=>{

      this.accessTokenList = results;

      this.gridView = {
        data: this.accessTokenList,
        total: this.accessTokenList.length
      }

    }, error=>{
      console.log("loadData error: ", error);
    });
}

  /**
   * Reload the list of access tokens for the selected refresh token
   */
  public refreshData():void{
    this.loadData(this.refreshToken.token);
  }
}
