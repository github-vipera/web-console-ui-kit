export enum WCGridColumnType {
  Default = 1,
  Command,
  Editable
}

export class WCGridColumnDef {
    name:string;
    label?:string;
    sortable?:boolean;
    type?:WCGridColumnType;
  }
  