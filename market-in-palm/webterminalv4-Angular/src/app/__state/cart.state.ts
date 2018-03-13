import { Observable } from "rxjs/Observable";
import {Item} from '../_models/item.model';
export interface CartStateTemplate{
    cart:Observable<Item[]>;
}

