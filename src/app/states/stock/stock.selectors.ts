import {createSelector} from '@ngrx/store';
import {productAppState} from '../AppState';
import {StockState} from './stock.reducer';

const selectProducts = (state: productAppState) => state.stock;

export const selectAllProducts = createSelector(
  selectProducts,
  (state: StockState) => state.products.map(({inStock, ...item}) => item)
);

export const selectProductByCategories = (categories: string[]) =>
  createSelector(selectProducts, (product: StockState) => {
    return product.products.filter((value) => {
      return categories.includes(value.category);
    });
  });


