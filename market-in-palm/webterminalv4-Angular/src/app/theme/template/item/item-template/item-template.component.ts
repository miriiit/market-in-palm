import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-item-list',
  templateUrl:"./item-template.component.html",
  styles: []
})
export class ItemTemplateComponent implements OnInit {
  item_list:number[]=[1,2,3,4,5,6,7,8,9,10];
  constructor() { 
  }

  ngOnInit() {
      
  }

}
