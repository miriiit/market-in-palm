import {Action} from '@ngrx/store';
import {Item} from '../_models/item.model';
 
export const EDIT_ITEM='[Item] Edit';
export const UPVOTE='[Item] Upvote';
export const DOWNVOTE='[Item] Downvote';
export const ADD_TO_CART ='[Item] Add';
export const RM_FROM_CART='[Item] Remove';
export const RESET ='[Item] Reset';

export class EditItem implements Action{
readonly type=EDIT_ITEM;
constructor(public payload:Item){}
}

export class Upvote implements Action{
    readonly type=UPVOTE;
}
export class Downvote implements Action{
    readonly type=DOWNVOTE;
}
export class Addtocart implements Action{
    readonly type=ADD_TO_CART;
    constructor(public payload:Item){}
}
export class Rmfromcart implements Action{
    readonly type=RM_FROM_CART;
    constructor(public payload:Item){}
}
export class Reset implements Action{
    readonly type=RESET;
}

export type All=  EditItem | Upvote | Downvote | Addtocart | Rmfromcart | Reset;