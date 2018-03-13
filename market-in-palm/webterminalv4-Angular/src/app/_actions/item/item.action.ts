import {Action} from '@ngrx/store';
import {Item} from '../../_models/item.model';
import { Observable } from 'rxjs/Observable';


export enum ItemsActionType{
    Search = '[Item] Search',
    SearchComplete = '[Item] Search Complete',
    SearchError = '[Item] Search Error',
    Load = '[Item] Load',
    Select = '[Item] Select',
    
}

export class Load implements Action{
    readonly type=ItemsActionType.Load;
    constructor(public payload: Item) {}
}
export class Search  implements Action{
    readonly type=ItemsActionType.Search;
    constructor(public payload: string) {}
}
export class SearchComplete  implements Action{
    readonly type=ItemsActionType.SearchComplete;
    constructor(public payload: Item[]) {}
}
export class SearchError  implements Action{
    readonly type=ItemsActionType.SearchError;
    constructor(public payload: string) {}
}
export class Select  implements Action{
    readonly type=ItemsActionType.Select;
    constructor(public payload: string) {}
}


export type ItemAction=  Load | Select  |Search | SearchComplete | SearchError;