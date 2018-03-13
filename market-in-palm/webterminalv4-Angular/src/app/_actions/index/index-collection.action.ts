import { Action } from '@ngrx/store';
import { User } from '../../_models/user';

export enum IndexCollectionActionTypes {
  AddUser = '[Collection] Add User',
  AddUserSuccess = '[Collection] Add User Success',
  AddUserFail = '[Collection] Add User Fail',
  RemoveUser = '[Collection] Remove User',
  RemoveUserSuccess = '[Collection] Remove User Success',
  RemoveUserFail = '[Collection] Remove User Fail',
  Load = '[Collection] Load',
  LoadSuccess = '[Collection] Load Success',
  LoadFail = '[Collection] Load Fail',
}

/**
 * Add User to Collection Actions
 */
export class AddUser implements Action {
  readonly type = IndexCollectionActionTypes.AddUser;

  constructor(public payload: User) {}
}

export class AddUserSuccess implements Action {
  readonly type = IndexCollectionActionTypes.AddUserSuccess;

  constructor(public payload: User) {}
}

export class AddUserFail implements Action {
  readonly type = IndexCollectionActionTypes.AddUserFail;

  constructor(public payload: User) {}
}

/**
 * Remove User from Collection Actions
 */
export class RemoveUser implements Action {
  readonly type = IndexCollectionActionTypes.RemoveUser;

  constructor(public payload: User) {}
}

export class RemoveUserSuccess implements Action {
  readonly type = IndexCollectionActionTypes.RemoveUserSuccess;

  constructor(public payload: User) {}
}

export class RemoveUserFail implements Action {
  readonly type = IndexCollectionActionTypes.RemoveUserFail;

  constructor(public payload: User) {}
}

/**
 * Load Collection Actions
 */
export class Load implements Action {
  readonly type = IndexCollectionActionTypes.Load;
}

export class LoadSuccess implements Action {
  readonly type = IndexCollectionActionTypes.LoadSuccess;

  constructor(public payload: User) {}
}

export class LoadFail implements Action {
  readonly type = IndexCollectionActionTypes.LoadFail;

  constructor(public payload: any) {}
}

export type IndexCollectionActions =
  | AddUser
  | AddUserSuccess
  | AddUserFail
  | RemoveUser
  | RemoveUserSuccess
  | RemoveUserFail
  | Load
  | LoadSuccess
  | LoadFail;
