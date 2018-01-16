import { Component, OnInit, ViewEncapsulation, AfterViewInit } from '@angular/core';
import { Helpers } from '../../../helpers';
import {User} from '../../../_models/user';
declare let mLayout: any;
@Component({
    selector: "app-header-nav",
    templateUrl: "./header-nav.component.html",
    encapsulation: ViewEncapsulation.None,
})
export class HeaderNavComponent implements OnInit, AfterViewInit {
  user:User;
  username:string;
    constructor() {
       
    }
    ngOnInit() {
        this.user=new User("00","","demo@demo.com","Annonymous");
    }
    ngAfterViewInit() {

        mLayout.initHeader();

    }

}