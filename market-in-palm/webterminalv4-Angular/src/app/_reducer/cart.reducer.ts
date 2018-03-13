import * as CartActions from '../_actions/cart.action';
import {Item} from '../_models/Item.model';
import {Subject} from 'rxjs/Subject';
import { Observable } from 'rxjs/Observable';
import * as cartservice from '../_services/cart.service';
export type Action=CartActions.All;

const Itemobj:Item={id:"000", title:'Undfined', price:0,discount:0, upvote:0, downvote:0, link:'https://',price_reduce:false };

cartservice.default_list;
const newState=(state,newData)=>{
var obj= Object.assign({},state,newData);
//console.log(obj.likes+ obj.text+ obj.locate);
return obj;
};
export function CartReducer(state:Observable<Item[]>=cartservice.default_list,action:Action){
   // console.log("postReducer: "+action.type+" "+state);
    
   switch(action.type)
    {
        case CartActions.EDIT_ITEM:
        return newState(state,{});
        case CartActions.UPVOTE:
        return newState(state,{});
        case CartActions.DOWNVOTE:
        return newState(state,{});
        case CartActions.ADD_TO_CART:
        {
            let item:Item=action.payload;
            return state;

        }
        case CartActions.RM_FROM_CART:
        {
            return newState(state,{item:action.payload});
        }
        case CartActions.RESET:
        return cartservice.default_list;
    }
}