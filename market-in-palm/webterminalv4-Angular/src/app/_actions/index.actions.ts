
export const ADD_TO_CART:string='[Post] addtocart';
export const RESET:string='[Post] reset';

export class Addtocart{
    private readonly ADD_TO_CART;
    
}

export class Reset{
    private readonly RESET;
}
export const All:any= Addtocart || Reset;


