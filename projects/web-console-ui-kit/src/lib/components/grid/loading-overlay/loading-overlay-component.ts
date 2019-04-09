import { Component, Input } from '@angular/core';
import { faCircleNotch } from '@fortawesome/free-solid-svg-icons';

@Component({
    selector: 'wc-loading-overlay',
    styleUrls: [ './loading-overlay-component.scss' ],
    templateUrl: './loading-overlay-component.html'
})
export class WCLoadingOverlayComponent {

    @Input() useProgress:boolean;
    faCircleNotch = faCircleNotch;

    @Input() progress:number;

    @Input() public visible: boolean;

    @Input() public progressTitle: string;

    constructor() {}
}
