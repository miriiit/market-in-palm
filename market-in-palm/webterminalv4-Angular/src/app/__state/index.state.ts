import {Observable} from 'rxjs/Observable';
import {User} from "../_models/user.model";
import {Item} from '../_models/item.model';
import {ItemList} from '../_models/item-list.model';

import {CartStateTemplate} from '../__state/cart.state';
import {UserStateTemplate} from '../__state/user.state';

import { createFeatureSelector,createSelector } from '@ngrx/store';

export const getItemState = createFeatureSelector<State>('item_list'); 
export const getItems = createSelector(
    getItemState, 
    (state: State) => {return state.item_list}
);

export const getUserState = createFeatureSelector<State>('user'); 
export const getUser = createSelector(
    getUserState, 
    (state: State) =>{return  state.user }
);

export const getCartState = createFeatureSelector<State>('cart'); 
export const getCart = createSelector(
    getCartState, 
    (state: State) =>{return state.cart}
);


//export const getUserState = (state: State) => state.user;

//export const getItemState = (state: State) => state.item_list;

//export const getCartState = (state: State) => state.cart;



export interface State {
    cart:CartStateTemplate;
    item_list:ItemList; 
    user:UserStateTemplate;
}

/* import { Observable } from "rxjs/Observable";
import {Item} from "../_models/item.model";
import {ItemList} from '../_models/item-list.model';
export interface IndexStateTemplate{
  // item_list:Observable<[Item]>;
 indexModel:ItemList;
} */
