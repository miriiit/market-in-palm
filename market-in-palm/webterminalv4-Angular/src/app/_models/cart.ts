import {Observable} from 'rxjs/Observable';
import {Item} from './item';
export class Cart{
    item_list:Observable<Item[]>;
}