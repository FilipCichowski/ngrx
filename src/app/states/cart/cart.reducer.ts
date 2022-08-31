import {createReducer, on} from '@ngrx/store';
import * as cartActions from './cart.actions';
import * as commonActions from '../cart-stock.actions';
import {Product} from '../../utilities/Product';

export interface CartState {
  products: Product[];
}

export const cartInitialState: CartState = {
  products: [],
};

// export const cartInitialState: Product[] = []

export const cartReducer = createReducer(
  cartInitialState,
  on(commonActions.addProducts, (state: CartState, { product, amount}) => ({
    ...state,
    products: [...state.products, ...Array(amount).fill(product)]
  })),
  on(commonActions.removeProduct, (state: CartState, { product}) => ({
  ...state,
  products: [...state.products.filter((v, i, a) => i !== a.findIndex(i => i.id === product.id))]
  })),
  on(cartActions.clearCart, cartActions.placeOrder, (state: CartState) => ({
    ...state,
    products: []
  })),
  on(cartActions.deleteProductFromCart, (state: CartState, { product }) => ({
    ...state,
    products: [...state.products.filter((p: Product) => p.id !== product.id)]
  })),
);
