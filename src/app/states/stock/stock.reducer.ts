import { createReducer, on } from '@ngrx/store';
import * as productActions from './stock.actions';
import * as commonActions from '../cart-stock.action';
import { Product } from '../../utilities/Product';

export interface StockState {
  products: Product[];
}

const productInitialState: StockState = {
  products: [],
};

export const stockReducer = createReducer(
  productInitialState,
  on(
    productActions.retrievedProductsList,
    (state: StockState, { products }) => ({
      ...state,
      products: [...products],
    })
  ),
  on(
    commonActions.removeProduct,
    (state: StockState, { product }) => {
      let modifiedState = JSON.parse(JSON.stringify([...state.products]));
      modifiedState.map((data: any) => {
        if (data.id === product.id) {
          data.inStock++;
        }
      });

      return {
        ...state,
        products: [...modifiedState],
      };
    }
  ),
  on(
    commonActions.addProducts,
    (state: StockState, { product, amount }) => {
      let modifiedState = JSON.parse(JSON.stringify([...state.products]));
      modifiedState.map((data: any) => {
        if (data.id === product.id) {
          data.inStock -= amount;
        }
      });

      return {
        ...state,
        products: [...modifiedState],
      };
    }
  )
);
