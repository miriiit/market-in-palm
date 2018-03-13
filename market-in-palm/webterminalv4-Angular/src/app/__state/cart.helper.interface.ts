import {Item} from '../_models/item.model';
export interface ICartTemplate{
    (cart_items: Item[]): Item[];
}