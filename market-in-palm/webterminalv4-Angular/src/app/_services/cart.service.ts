import {Injectable} from '@angular/core';
import {Observable} from 'rxjs/Observable';
import {Item} from '../_models/item.model';
import {ICartTemplate} from '../__state/cart.helper.interface';

import {Subject} from 'rxjs/Subject';
import 'rxjs/add/operator/distinct';
const initialCart: Item[] = [];

const item_obj_1:Item={id:"-1",title:"N/A",price:0,discount:0,upvote:0,downvote:0,link:"N/A",price_reduce:false};

const items:Item[]=[ item_obj_1];

export const default_list:Observable<Item[]>= new Observable(observer => {
        observer.next(items);
      
        setTimeout(() => {
        observer.complete();
        }, 3000);
        });

@Injectable()
export class CartService{
  
    
 // a stream that publishes new messages only once
    newCart_items: Subject<Item> = new Subject<Item>();
    rmCart_items: Subject<Item> = new Subject<Item>();

    cart:Observable<Item[]>;
    updates: Subject<any> = new Subject<any>(); 
    //action streams
     create: Subject<Item> = new Subject<Item>();
     remove: Subject<Item> = new Subject<Item>();

     markThreadAsRead: Subject<any> = new Subject<any>();
      list:Observable<Item[]>;

    constructor(){
        
        this.cart = this.updates
        // watch the updates and accumulate operations on the Cart Change
        .scan((cart: Item[],
               operation: ICartTemplate) => {
                 return operation(cart);
               },
               initialCart)
        
        // make sure we can share the most recent cart across any page
        .publishReplay(1)
        .refCount();
        
        //cart.filter((ele)=>{return ele.id!=item.id})
        
        this.create
        .map( function(item: Item): ICartTemplate {
          return (cart: Item[]) => {
             if(cart.indexOf(item)>-1)
              cart.splice(cart.indexOf(item),1);
             
             return cart.concat((item));   
                 
              
          };
        })
        .subscribe(this.updates);
        
        this.remove
        .map( function(item: Item): ICartTemplate {
          return (cart: Item[]) => {
              return cart.filter((ele)=>{ return ele.id!=item.id});  //cart.sprlice(indexOf(ele),1)
          };
        })
        .subscribe(this.updates);
        
      this.newCart_items
        .subscribe(this.create);
      this.rmCart_items
      .subscribe(this.remove);
      /*this.markThreadAsRead
      .map( (thread: Thread) => {
        return (messages: Message[]) => {
          return messages.map( (message: Message) => {
            // note that we're manipulating `message` directly here. Mutability
            // can be confusing and there are lots of reasons why you might want
            // to, say, copy the Message object or some other 'immutable' here
            if (message.thread.id === thread.id) {
              message.isRead = true;
            }
            return message;
          });
        };
      })
      .subscribe(this.updates);*/
      
        
    }
    

    add_to_cart(item:Item){
        this.newCart_items.next(item);
    }
    rm_from_cart(item:Item){
        this.rmCart_items.next(item);
    }
    get_cart(){
      return  this.cart;  
    }
    get_items(){
        return  default_list;  
      }
    
 }