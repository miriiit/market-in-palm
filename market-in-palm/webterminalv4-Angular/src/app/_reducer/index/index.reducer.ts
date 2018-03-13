import { createSelector, createFeatureSelector } from '@ngrx/store';

import * as fromIndexAction from '../../_actions/index/index-collection.action';
import * as fromUser from './user.reducer';
import * as fromRoot from '../index.reducer';

export interface  UserState {
  user: fromUser.State;
}

export interface State extends fromRoot.State {
    user: UserState;
}

export const reducers = {
  user: fromUser.reducer,
};
export const getUserState = createFeatureSelector<UserState>('user');

export const getUserCollectionEntitiesState = createSelector(
        getUserState,
  state => state.user
);




export const getCollectionState = createSelector(
        getUserState,
  (state: UserState) => state.user
);

export const getCollectionLoaded = createSelector(
  getCollectionState,
  fromUser.getLoaded
 
);
export const getCollectionLoading = createSelector(
  getCollectionState,
  fromUser.getLoading
);
export const getCollectionUser = createSelector(
  getCollectionState,
  fromUser.getUser
);

export const getItemsCollection = createSelector(
        getUserCollectionEntitiesState,
        getCollectionUser,
  (entities, user) => {
    return user;
  }
);

/*export const isSelectedBookInCollection = createSelector(
  getCollectionBookIds,
  getSelectedBookId,
  (ids, selected) => {
    return ids.indexOf(selected) > -1;
  }
);*/