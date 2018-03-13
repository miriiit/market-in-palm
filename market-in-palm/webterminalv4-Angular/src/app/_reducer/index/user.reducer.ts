import {User} from '../../_models/user';
import {Roles} from "../../_models/role.model";

import {
    IndexActionType,IndexActions
} from '../../_actions/index/index.action';

import {usrobj} from '../../__temp';


export type Action=IndexActions;

export interface State {
  loaded: boolean;
  loading: boolean;
  user: User;
}

const initialState: State = {
  loaded: false,
  loading: false,
  user:usrobj,
};

    const newState=(state,newData)=>{
        var obj= Object.assign({},state,newData);
        return obj;
        };
      
        
    export function reducer(state=initialState,action:Action){
        // console.log("postReducer: "+action.type+" "+state);
         switch(action.type)
         {
            case IndexActionType.USER:
             return newState(state,{});
             case IndexActionType.RESET:
             return initialState;
         }
     }
    
    export const getLoaded = (state: State) => state.loaded;

    export const getLoading = (state: State) => state.loading;

    export const getUser = (state: State) => state.user;

    
    