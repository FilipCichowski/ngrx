import { createReducer, on } from '@ngrx/store';
import * as cartActions from './cart.actions';
import {Product} from '../../utilities/Product';

export interface Cart {
  products: Product[];
}

export const cartInitialState: Cart = {
  products: [],
};

// export const cartInitialState: Product[] = []

export const cartReducer = createReducer(
  cartInitialState,
  on(cartActions.addProduct, (state: Cart, { product, amount}) => ({
    ...state,
    products: [...state.products, ...Array(amount).fill(product)]
  })),
  on(cartActions.deleteProduct, (state: Cart, { product}) => ({
  ...state,
  products: [...state.products.filter((v, i, a) => i !== a.findIndex(i => i.id === product.id))]
  })),
  on(cartActions.clearCart, (state: Cart) => ({
    ...state,
    products: []
  })),
);
