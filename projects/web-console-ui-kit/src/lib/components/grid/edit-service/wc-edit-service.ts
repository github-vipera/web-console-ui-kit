import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';

/*
import { Observable } from 'rxjs/Observable';
import { zip } from 'rxjs/observable/zip';
import { map } from 'rxjs/operators/map';
*/

const CREATE_ACTION = 'create';
const UPDATE_ACTION = 'update';
const REMOVE_ACTION = 'destroy';

const cloneData = (data: any[]) => data.map(item => Object.assign({}, item));

export interface WCEditServiceConfiguration {
    idField:string,
    dirtyField:string,
    isNewField:string
}

@Injectable()
export class WCEditService extends BehaviorSubject<any[]> {
    private data: any[] = [];
    private originalData: any[] = [];
    public createdItems: any[] = [];
    public updatedItems: any[] = [];
    public deletedItems: any[] = [];
    private configuration:WCEditServiceConfiguration;

    constructor() {
        super([]);
    }

    public read(data:any, configuration:WCEditServiceConfiguration) {
        this.configuration = configuration;
       
        this.data = data;
        this.originalData = cloneData(data);
        super.next(data);
        return super.next(this.data);
    }

    public create(item: any): void {
        item[this.configuration.dirtyField]= "true";
        this.createdItems.push(item);
        this.data.unshift(item);

        super.next(this.data);
    }

    public update(item: any): void {
        if (!this.isNew(item)) {
            const index = this.itemIndex(item, this.updatedItems);
            if (index !== -1) {
                this.updatedItems.splice(index, 1, item);
            } else {
                this.updatedItems.push(item);
            }
        } else {
            const index = this.createdItems.indexOf(item);
            this.createdItems.splice(index, 1, item);
            //console.log(">>>>> update is new index=", index);
        }
        item[this.configuration.dirtyField]= "true";
    }

    public remove(item: any): void {
        let index = this.itemIndex(item, this.data);
        this.data.splice(index, 1);

        index = this.itemIndex(item, this.createdItems);
        if (index >= 0) {
            this.createdItems.splice(index, 1);
        } else {
            this.deletedItems.push(item);
        }

        index = this.itemIndex(item, this.updatedItems);
        if (index >= 0) {
            this.updatedItems.splice(index, 1);
        }

        super.next(this.data);
    }

    public isNew(item: any): boolean {
        return item[this.configuration.isNewField];
    }

    public hasChanges(): boolean {
        return Boolean(this.deletedItems.length || this.updatedItems.length || this.createdItems.length);
    }

    public saveChanges(): void {
        if (!this.hasChanges()) {
            return;
        }

        const completed = [];

        /** TODO!!
        if (this.deletedItems.length) {
            completed.push(this.fetch(REMOVE_ACTION, this.deletedItems));
        }

        if (this.updatedItems.length) {
            completed.push(this.fetch(UPDATE_ACTION, this.updatedItems));
        }

        if (this.createdItems.length) {
            completed.push(this.fetch(CREATE_ACTION, this.createdItems));
        }
        **/

        this.reset();
        //zip(...completed).subscribe(() => this.read());
    }

    public cancelChanges(): void {
        this.reset();

        this.data = this.originalData;
        this.originalData = cloneData(this.originalData);
        super.next(this.data);
    }

    public assignValues(target: any, source: any): void {
        Object.assign(target, source);
    }

    public reset() {
        this.data = [];
        this.deletedItems = [];
        this.updatedItems = [];
        this.createdItems = [];
    }

    public init() {
        this.reset()
        this.originalData = [];
        super.next(this.data);
    }

    private itemIndex(item: any, data: any[]): number {
        for (let idx = 0; idx < data.length; idx++) {
            if (data[idx][this.configuration.idField] === item[this.configuration.idField]) {
                return idx;
            }
        }
        return -1;
    };
    
}
