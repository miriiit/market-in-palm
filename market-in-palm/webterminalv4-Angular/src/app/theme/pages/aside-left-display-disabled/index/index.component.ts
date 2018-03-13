import { Component, OnInit, ViewEncapsulation, AfterViewInit } from '@angular/core';
import { Helpers } from '../../../../helpers';
import { ScriptLoaderService } from '../../../../_services/script-loader.service';
import {Store,select} from '@ngrx/store';
//import {IndexStateTemplate} from '../../../../__state/index.state';
import { Observable } from 'rxjs/Observable';
import {User} from '../../../../_models/user.model';
import {ItemList} from '../../../../_models/item-list.model';
import {Item} from '../../../../_models/item.model';
/*import {Utils} from '../../../../_handler/utils';*/


import * as collectionActions from '../../../../_actions/item/item-collection.action';

import * as fromIndexModule from '../../../../_reducer/Item/item-index.reducer';

import { UserStateTemplate } from '../../../../__state/user.state';
@Component({
    selector: ".m-grid__item.m-grid__item--fluid.m-wrapper",
    templateUrl: "./index.component.html",
    encapsulation: ViewEncapsulation.None,
})
export class IndexComponent implements OnInit, AfterViewInit {


    //items:Observable<ItemList>;
    items_OBS:Observable<Item[]>;
    user:Observable<UserStateTemplate>;
    itemlist:Item[];
    element:Item;

    seleteditem_OBS:Observable<Item>
   
    // itemlist:Item[];

    constructor(private _script: ScriptLoaderService,private store:Store<fromIndexModule.State>) {
        
        this.items_OBS = store.pipe(select(fromIndexModule.getCollectionItems));
       // this.seleteditem_OBS = store.pipe(select(fromIndexModule.getCollectionItem));
        //util.init_items_store();
        //this.items= util.item_list();
        this.items_OBS.subscribe(item=>{
            this.itemlist=item;
            console.log(this.itemlist)
         }); 
 
       /* this.seleteditem_OBS.subscribe(item=>{
           this.element=item;
            console.log(this.element)
         }); */
         // util.init_user_store();
        // this.user=util.active_user();
        
        /*util.init_cart_store(); */
        }

        addToCart(itemObj:Item){
       //  this.util.add_to_cart_store(itemObj);
            console.log(itemObj);
        }


    ngOnInit() {
        this.store.dispatch(new collectionActions.Load());
       // this.store.dispatch(new IndexActions.LoadProductsList());
       // this.store.dispatch(new IndexActions.User());
    }
    ngAfterViewInit() {
        // this._script.load('.m-grid__item.m-grid__item--fluid.m-wrapper',
        //     'assets/app/js/dashboard.js');
        Helpers.bodyClass('m-page--wide m-header--fixed m-header--fixed-mobile m-footer--push m-aside--offcanvas-default');
    }

}