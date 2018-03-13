
import {Item} from '../../_models/Item.model';
import { createEntityAdapter, EntityAdapter, EntityState } from '@ngrx/entity';
import { createSelector, Action, createFeatureSelector } from '@ngrx/store';
import { itemobj } from '../../__temp';

import * as ItemColcActn from '../../_actions/item/item-collection.action';
import * as ItemActn from '../../_actions/item/item.action';


export interface State extends EntityState<Item> {
    selectedItem: Item | null ;
  }
export const adapter: EntityAdapter<Item> = createEntityAdapter<Item>({
    selectId: (item: Item) => item.id,
    sortComparer: false,
  });

export const initialState: State = adapter.getInitialState({
    selectedItem: itemobj,
  });

export type Action= ItemColcActn.ItemCollectionActions | ItemActn.ItemAction;

export  function reducer(state=initialState,action:Action):State{
   // console.log("postReducer: "+action.type+" "+state);
    switch(action.type)
    {
        case ItemActn.ItemsActionType.Load:
        {
        return  initialState;//newState(state,{});   
        }
        case ItemActn.ItemsActionType.Select:
        return initialState;
        case ItemActn.ItemsActionType.Search:
            return initialState;
        case ItemActn.ItemsActionType.SearchComplete:
            return initialState;
        case ItemActn.ItemsActionType.SearchError:
            return initialState;
    }
}
export const getSelectedItem = (state: State) => state.selectedItem;