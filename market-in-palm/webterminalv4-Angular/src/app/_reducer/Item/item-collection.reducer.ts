import {
  ItemCollectionActionTypes,
  ItemCollectionActions,
} from '../../_actions/item/item-collection.action';
import {Item} from '../../_models/item';
import {items} from '../../__temp';


export interface State {
  loaded: boolean;
  loading: boolean;
  item_list: Item[];
}

const initialState: State = {
  loaded: false,
  loading: false,
  item_list:items,
};

export function reducer(
  state = initialState,
  action: ItemCollectionActions
): State {
  switch (action.type) {
    case ItemCollectionActionTypes.Load: {
      return {
        ...state,
        loading: true,
      };
    }

    case ItemCollectionActionTypes.LoadSuccess: {
      return {
        loaded: true,
        loading: false,
        item_list: action.payload //action.payload.map(Item => Item),
      };
    }

    case ItemCollectionActionTypes.AddItemSuccess:
    case ItemCollectionActionTypes.RemoveItemFail: {
      if (state.item_list.indexOf(action.payload) > -1) {
        return state;
      }

      return {
        ...state,
        item_list: [...state.item_list, action.payload],
      };
    }

    case ItemCollectionActionTypes.RemoveItemSuccess:
    case ItemCollectionActionTypes.AddItemFail: {
      return {
        ...state,
        item_list: state.item_list.filter(item => item !== action.payload),
      };
    }

    default: {
      return state;
    }
  }
}

export const getLoaded = (state: State) => state.loaded;

export const getLoading = (state: State) => state.loading;

export const getItems = (state: State) => state.item_list;
