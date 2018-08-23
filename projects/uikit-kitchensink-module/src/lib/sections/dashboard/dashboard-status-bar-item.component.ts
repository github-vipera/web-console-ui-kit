import { Component, Input } from '@angular/core';
import { StatusBarItemComponent }      from 'web-console-core';
import { timer } from 'rxjs';

@Component({
  styleUrls: [
    './test.scss'
  ],
  template: `
    <div style="display:flex;margin-right:24px;">
      <div class="info license">
        {{dateTime  | date:'h:mm.ss a' }}
      </div>
      <div class="license">ViperaOSGI • ver. 1.10 • Issued 02.25.2016 • <b class="warn">Expires 12.31.2018</b></div>
    </div>
  `
})
export class DashboardStatusBarItemComponent implements StatusBarItemComponent {
  @Input() data: any;
  dateTime:Date = new Date;

  constructor(){
    timer(0, 1000).subscribe(x=>{
      this.dateTime = new Date();
    });
  }
}
