import { createSelector, createFeatureSelector } from '@ngrx/store';

import * as fromItemCollection from './item-collection.reducer';
import * as fromItem from './item.reducer';
import * as fromRoot from '../index.reducer';

export interface ItemsState {
  item: fromItem.State;
  items: fromItemCollection.State;
}

export interface State extends fromRoot.State {
    itemModule: ItemsState;
}

export const reducers = {
  item: fromItem.reducer,
  items: fromItemCollection.reducer,
};

/**
 * A selector function is a map function factory. We pass it parameters and it
 * returns a function that maps from the larger state tree into a smaller
 * piece of state. This selector simply selects the `books` state.
 *
 * Selectors are used with the `select` operator.
 *
 * ```ts
 * class MyComponent {
 *   constructor(state$: Observable<State>) {
 *     this.booksState$ = state$.pipe(select(getBooksState));
 *   }
 * }
 * ```
 */

/**
 * The createFeatureSelector function selects a piece of state from the root of the state object.
 * This is used for selecting feature states that are loaded eagerly or lazily.
 */
export const itemModule = createFeatureSelector<ItemsState>('itemModule');

/**
 * Every reducer module exports selector functions, however child reducers
 * have no knowledge of the overall state tree. To make them usable, we
 * need to make new selectors that wrap them.
 *
 * The createSelector function creates very efficient selectors that are memoized and
 * only recompute when arguments change. The created selectors can also be composed
 * together to select different pieces of state.
 */
export const getItemsCollectionEntitiesState = createSelector(
        itemModule,
  state => state.items
);

export const getItemCollectionEntitiesState = createSelector(
        itemModule,
  state => state.item
);


/**
 * Adapters created with @ngrx/entity generate
 * commonly used selector functions including
 * getting all ids in the record set, a dictionary
 * of the records by id, an array of records and
 * the total number of records. This reducers boilerplate
 * in selecting records from the entity state.
 */
/*export const {
  selectIds: getItemIds,
  selectEntities: getItemEntities,
  selectAll: getAllItems,
  selectTotal: getTotalItems,
} = fromItem.adapter.getSelectors(getItemsCollectionEntitiesState);
*/

/*export const getSelectedBook = createSelector(
        getItemsCollectionEntitiesState,
        getSelectedItemId,
        (entities, selectedId) => {
          return selectedId && entities[selectedId];
        }
      );
*/
/**
 * Just like with the books selectors, we also have to compose the search
 * reducer's and collection reducer's selectors.
 */
/*export const getSearchState = createSelector(
  getBooksState,
  (state: ItemsState) => state.
);

export const getSearchBookIds = createSelector(
  getSearchState,
  fromSearch.getIds
);
export const getSearchQuery = createSelector(
  getSearchState,
  fromSearch.getQuery
);
export const getSearchLoading = createSelector(
  getSearchState,
  fromSearch.getLoading
);
export const getSearchError = createSelector(
  getSearchState,
  fromSearch.getError
);

*//**
 * Some selector functions create joins across parts of state. This selector
 * composes the search result IDs to return an array of books in the store.
 *//*
export const getSearchResults = createSelector(
  getBookEntities,
  getSearchBookIds,
  (books, searchIds) => {
    return searchIds.map(id => books[id]);
  }
);*/


//reducer items
export const getItemsCollectionState = createSelector(
  itemModule,
  (state: ItemsState) => state.items
);

//reducer item
export const getItemCollectionState = createSelector(
        itemModule,
        (state: ItemsState) => state.item
      );


export const getCollectionLoaded = createSelector(
        getItemsCollectionState,
  fromItemCollection.getLoaded
 
);
export const getCollectionLoading = createSelector(
        getItemsCollectionState,
  fromItemCollection.getLoading
);

//State of items Handler
export const getCollectionItems = createSelector(
   getItemsCollectionState,
  fromItemCollection.getItems
);

//Fetch data form items handler
export const getItemsCollection = createSelector(
  getItemsCollectionEntitiesState,
  getCollectionItems,
  (entities, item_list) => {
    return item_list.map(item => entities[item.id]);
  }
);

//State of item Handler
export const getCollectionItem = createSelector(
   getItemCollectionState,
   fromItem.getSelectedItem
);

//Fetch data form item handler
export const getItemCollection = createSelector(
  getItemCollectionEntitiesState,
  getCollectionItem,
  (entities, item) => {
    return item;
  }
);


/*export const isSelectedBookInCollection = createSelector(
  getCollectionBookIds,
  getSelectedBookId,
  (ids, selected) => {
    return ids.indexOf(selected) > -1;
  }
);*/
