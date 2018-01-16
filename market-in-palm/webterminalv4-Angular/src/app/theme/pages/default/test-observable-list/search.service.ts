import {Injectable} from '@angular/core';
import {Http} from '@angular/http';
import 'rxjs/Rx';
import {Observable} from 'rxjs';
import 'rxjs/add/operator/map';

@Injectable()
export class SearchService {
  apiRoot: string = 'https://itunes.apple.com/search';
  results: SearchItem[];
  loading: boolean;

  constructor(private http: Http) {
    this.results = [];
    this.loading = false;
  }
  search(term: string): Observable<SearchItem[]> {
	    let apiURL = `${this.apiRoot}?term=${term}&media=music&limit=20`;
	    return this.http.get(apiURL)
	        .map(res => {
	          return res.json().results.map(item => {
	            return new SearchItem(
	                item.trackName,
	                item.artistName,
	                item.trackViewUrl,
	                item.artworkUrl30,
	                item.artistId
	            );
	          });
	        });
	  }
  callJson():Observable<Person[]>{
      
      let apiURL = `http://localhost:8080/greeting`;
	  
      return this.http.get(apiURL)
      .map((res) => {
        return res.json()
      });
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
	constructor(public id:string,
			public  name:string,
			public salary:string){}
}



