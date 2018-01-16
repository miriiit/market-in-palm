import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import {FormControl} from '@angular/forms';

import {Observable} from 'rxjs';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/debounceTime';
import 'rxjs/add/operator/distinctUntilChanged';
import 'rxjs/add/operator/switchMap';
import {SearchService} from './search.service';

@Component({
	  selector: '.m-wrapper',
	    templateUrl: './list-movie.component.html',
	    encapsulation: ViewEncapsulation.None,
})

export class ListMovieComponent implements OnInit {
	greeting:Observable<Person[]>;
	private searchField:FormControl;
	results:Observable<SearchItem[]>;
   constructor(private itunes:SearchService) {

    }
	ngOnInit() {
	    let ref=this;
		this.searchField = new FormControl();
		this.results = this.searchField.valueChanges
			.debounceTime(400)
			.distinctUntilChanged()
			.switchMap(term => this.itunes.search(term))
	  }
    doSearch(term:string){
    	 this.results=this.itunes.search(term);
    }
    
   callAjax(){
     this.itunes.callJson()
     .subscribe(res=> console.log(res));
     
    }

}
class SearchItem {
	  constructor(public name: string,
	              public artist: string,
	              public link: string,
	              public thumbnail: string,
	              public artistId: string) {
	  }
	}
	class Person{
	constructor(public id:string,public  name:string,public salary:string){
	}}
