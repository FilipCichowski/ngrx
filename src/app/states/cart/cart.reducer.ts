import { createReducer, on } from '@ngrx/store';
import * as cartActions from './cart.actions';
import {cartProduct, Product} from '../../utilities/Product';
import {possibleProducts} from "../../utilities/possibleProducts";

export interface Cart {
  products: Product[];
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
  on(cartActions.addProduct, (state: Cart, { product, amount}) => ({
    ...state,
    inCart:state.inCart+1,
    products: [...state.products, ...Array(amount).fill(product)]
  })),
  on(cartActions.deleteProduct, (state: Cart, { product}) => ({
  ...state,
  inCart:state.inCart-1,
  products: [...state.products.filter((v, i, a) => i !== a.findIndex(i => i.id === product.id))]
}))
);
