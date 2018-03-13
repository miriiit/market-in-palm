import { Action } from '@ngrx/store';
import { Item } from '../../_models/Item';

export enum ItemCollectionActionTypes {
  AddItem = '[Collection] Add Item',
  AddItemSuccess = '[Collection] Add Item Success',
  AddItemFail = '[Collection] Add Item Fail',
  RemoveItem = '[Collection] Remove Item',
  RemoveItemSuccess = '[Collection] Remove Item Success',
  RemoveItemFail = '[Collection] Remove Item Fail',
  Load = '[Collection] Load',
  LoadSuccess = '[Collection] Load Success',
  LoadFail = '[Collection] Load Fail',
}

/**
 * Add Item to Collection Actions
 */
export class AddItem implements Action {
  readonly type = ItemCollectionActionTypes.AddItem;

  constructor(public payload: Item) {}
}

export class AddItemSuccess implements Action {
  readonly type = ItemCollectionActionTypes.AddItemSuccess;

  constructor(public payload: Item) {}
}

export class AddItemFail implements Action {
  readonly type = ItemCollectionActionTypes.AddItemFail;

  constructor(public payload: Item) {}
}

/**
 * Remove Item from Collection Actions
 */
export class RemoveItem implements Action {
  readonly type = ItemCollectionActionTypes.RemoveItem;

  constructor(public payload: Item) {}
}

export class RemoveItemSuccess implements Action {
  readonly type = ItemCollectionActionTypes.RemoveItemSuccess;

  constructor(public payload: Item) {}
}

export class RemoveItemFail implements Action {
  readonly type = ItemCollectionActionTypes.RemoveItemFail;

  constructor(public payload: Item) {}
}

/**
 * Load Collection Actions
 */
export class Load implements Action {
  readonly type = ItemCollectionActionTypes.Load;
}

export class LoadSuccess implements Action {
  readonly type = ItemCollectionActionTypes.LoadSuccess;

  constructor(public payload: Item[]) {}
}

export class LoadFail implements Action {
  readonly type = ItemCollectionActionTypes.LoadFail;

  constructor(public payload: any) {}
}

export type ItemCollectionActions =
  | AddItem
  | AddItemSuccess
  | AddItemFail
  | RemoveItem
  | RemoveItemSuccess
  | RemoveItemFail
  | Load
  | LoadSuccess
  | LoadFail;
