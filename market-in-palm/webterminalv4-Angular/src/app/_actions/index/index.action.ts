import {Action} from '@ngrx/store';
import { Observable } from 'rxjs/Observable';


export enum IndexActionType{
    USER='[User] User',
    RESET ='[User] Reset'
}

export class USER implements Action{
    readonly type=IndexActionType.USER;
}
export class RESET implements Action{
    readonly type=IndexActionType.RESET;
}
export type IndexActions= USER | RESET;