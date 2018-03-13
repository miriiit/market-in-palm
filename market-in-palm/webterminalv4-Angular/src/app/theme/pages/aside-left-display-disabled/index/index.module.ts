import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { IndexComponent } from './index.component';
import { LayoutModule } from '../../../layouts/layout.module';
import { AsideLeftDisplayDisabledComponent } from '../aside-left-display-disabled.component';
import {ItemTemplateComponent} from '../../default/template/item-list/item-template.component';
import {StoreModule} from '@ngrx/store';

//@COMMON_DEPRECATED_I18N_PIPES
/* import {ItemListReducer} from '../../../../_reducer/item-list.reducer';*/

import {State} from '../../../../__state/index.state'


import {CartService} from '../../../../_services/cart.service';
import { COMMON_DEPRECATED_I18N_PIPES } from '@angular/common/src/pipes/deprecated';
import { CartReducer } from '../../../../_reducer/cart.reducer';

import { reducers } from '../../../../_reducer/Item/item-index.reducer';
const routes: Routes = [
    {
        "path": "",
        "component": AsideLeftDisplayDisabledComponent,
        "children": [
            {
                "path": "",
                "component": IndexComponent,
            }
        ]
    }
];
@NgModule({
    imports: [
        CommonModule, RouterModule.forChild(routes), LayoutModule,StoreModule.forFeature('itemModule',reducers),   //StoreModule.forRoot({indexModel:ItemListReducer,userModel:UserReducer,cart:CartReducer}
    ], exports: [
        RouterModule
    ], declarations: [
        IndexComponent,ItemTemplateComponent
    ],providers:[CartService]
})
export class IndexModule {
}