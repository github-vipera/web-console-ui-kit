import { Component } from '@angular/core';
import { ACLService } from 'web-console-core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';
  constructor(private aclService:ACLService){
    this.aclService.addPermission("test20");
    this.aclService.addPermission("test23");
  }

}
