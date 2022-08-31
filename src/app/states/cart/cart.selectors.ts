import {createSelector} from '@ngrx/store';
import {CartState} from "./cart.reducer";
import {appState} from "../../utilities/AppState";
import {Product} from "../../utilities/Product";

const selectProducts = (state: appState) => state.cart;

export const getStockProducts = createSelector(
  selectProducts,
  (state: CartState) => state.products
);

export const getProductsCategories = createSelector(
  selectProducts,
  state => [...new Set(state.products.map((product: Product) => product.category))]
)

export const getProductsIdByCategory = (category: string) =>createSelector(
  selectProducts,
  state => [...new Set(state.products.filter((item: Product) => item.category === category).map((item: Product) => item.id))]
)

export const getNumberOfProductsWithIdInCart = (id: number) => createSelector(
  selectProducts,
  state => state.products.length
)

export const getProductById = (id: number) => createSelector(
  selectProducts,
  state => state.products.find((p: Product) => p.id === id)
)

export const getTotalPriceForOrder = createSelector(
  selectProducts,
  state => state.products.reduce((acc: number, product: Product) => acc + product.price, 0)
)
