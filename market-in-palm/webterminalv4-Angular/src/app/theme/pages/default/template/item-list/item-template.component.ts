import { Component, OnInit,EventEmitter,Input,Output } from '@angular/core';
import * as CartActions from '../../../../../_actions/cart.action';
import {Store} from '@ngrx/store';
import { Observable } from 'rxjs/Observable';
import {Item} from '../../../../../_models/item.model';
//import { EventEmitter } from '@angular/core/src/event_emitter';
/* import { Output } from '@angular/core/src/metadata/directives';
import { Input } from '@angular/core/src/metadata/directives'; */
@Component({
  selector: 'app-item-list',
  templateUrl:"./item-template.component.html",
  styles: []
  })
  export class ItemTemplateComponent implements OnInit {
  @Input('itemlist') items:Item[];    
  @Output() addtocart=new EventEmitter<Item>();
  
  constructor() {
  }
  ngOnInit() {
  
  }
  addToCart(item_obj:Item){
    this.addtocart.emit(item_obj);
    //console.log(item_obj.title+" "+item_obj.link);
  }
}