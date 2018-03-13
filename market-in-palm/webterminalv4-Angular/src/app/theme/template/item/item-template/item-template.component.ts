import { Component, OnInit,Output,EventEmitter , Input} from '@angular/core';
import {Item} from '../../../../_models/item';


@Component({
  selector: 'app-item-list',
  templateUrl:"./item-template.component.html",
  styles: []
})
export class ItemTemplateComponent implements OnInit {
 // item_list:number[]=[1,2,3,4,5,6,7,8,9,10];
   
 @Output() emitter_ad= new EventEmitter<Item>();
 @Output() emitter_rm= new EventEmitter<Item>();
 @Input() item_list:Item[]; 
 
 
 constructor() { 
 }

  ngOnInit() {
      
  }

  add_to_cart(item_obj:Item)
  {
     this.emitter_ad.emit(item_obj);
  }
  rm_from_cart(item_obj:Item)
  {
      this.emitter_rm.emit(item_obj);
  }
}
