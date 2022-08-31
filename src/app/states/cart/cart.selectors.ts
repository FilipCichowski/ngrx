import {createSelector} from '@ngrx/store';
import {CartState} from "./cart.reducer";
import {productAppState} from "../AppState";
import {Product} from "../../utilities/Product";

const selectProducts = (state: productAppState) => state.cart;

export const getStockProducts = createSelector(
  selectProducts,
  (state: CartState) => state.products
);

export const getProductsCategories = createSelector(
  selectProducts,
  state => [...new Set(state.products.map((product: Product) => product.category))]
)
