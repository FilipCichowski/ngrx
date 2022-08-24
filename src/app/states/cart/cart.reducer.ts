import { createReducer, on } from '@ngrx/store';
import * as cartActions from './cart.actions';
import {cartProduct, Product} from '../../utilities/Product';
import {possibleProducts} from "../../utilities/possibleProducts";

export interface Cart {
  products: cartProduct[];
  inCart: number;
  toPay: number;
}

export const cartInitialState: Cart = {
  products: [],
  inCart: 0,
  toPay: 0,
};

export const cartReducer = createReducer(
  cartInitialState,
  on(cartActions.addProduct, (state: Cart, { productId, amount }) => ({
    ...state,
    inCart:state.inCart+1,
    products: []
  }))
);
