# 

# Web Console UI Kit



Inside the UI Kit you can find a series of components that will help you in creating the UI of your web-console.

The components are divided into the following categories:

- Core (Containers, Panels, Edit Controls, etc...)

- Data (Gauges, Lines, Dashboard Labels, etc...)

- Charts (Swimlane NgxCharts: https://github.com/swimlane/ngx-charts)

- Kendo (the complete KendoUI suite: https://www.telerik.com/kendo-angular-ui/)


Here is a list:

| Component Name   | Descirption                                                  |
| ---------------- | ------------------------------------------------------------ |
| Overlay Pane     | A simple overlay pane for blocking/modal operations          |
| Switch Button    | A simple switch ON/OFF button                                |
| Dashboard Header | A label for a dashboard item title                           |
| Dashboard        | A dashboard component (see: https://github.com/tiberiuzuld/angular-gridster2) |
| Panel            | A simple panel container                                     |
| Slide Down Panel | A drop down panel for editing UI                             |
| Tabs             | A Tab component                                              |
| Counter          | A simple value display for metrics                           |
| Gauge            | A gauge value display for metrics                            |
| Property Editor  | A JSON visual property editor                                |
| Grid Cell Editor | A cell editor customizable for the grid                      |
| Kendo Components | All Kendo UI components for Angular                          |
| Charts           | A charts suite from Swimlane Charts                          |



## Dashboard Header

The `WCDashboardHeaderComponent` is a label that you can put as a title for every element of your dashboard:

![](./images/dashboard-header2.png)



To add a dashboard header in your page you need to use this directive:

`<wc-dashboard-header [title]="'User Management'"></wc-dashboard-header>` 



## Slide Down Panel

With the `WCSlideDownPanelComponent` you can create non-invasive interface elements that can appear and disappear when needed:

![](./images/slide-down-panel.gif)



To add a slide down panel you need to use the `wc-slide-down-panel` directive:

```html
<wc-slide-down-panel>
    <div id="user-add" class="editor slidedown">
        <input placeholder="UserID" id="new-user-userid" [(ngModel)]="newUserModel.userId">
        <input placeholder="UserIDInt" id="new-user-useridint" [(ngModel)]="newUserModel.userIdInt">
        <input placeholder="msisdn" id="new-user-msisdn" [(ngModel)]="newUserModel.msisdn">
        <input placeholder="serial" id="new-user-serial" [(ngModel)]="newUserModel.serial">
        <div class="cmd">
            <a>
                <svg class="ok" data-id="ok" (click)="onEditorConfirmButtonPressed()"><use xlink:href="assets/img/icons.svg#ico-ok"></use></svg> 
            </a>
            <a data-slideup="#user-add" (click)="onEditorDismissButtonPressed()">
                <svg class="ko" data-id="ko"><use xlink:href="assets/img/icons.svg#ico-ko"></use></svg>
            </a>
        </div>
    </div>
</wc-slide-down-panel>
```



