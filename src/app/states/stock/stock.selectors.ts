import {createSelector} from '@ngrx/store';
import {appState} from '../../utilities/AppState';
import {StockState} from './stock.reducer';

const selectProducts = (state: appState) => state.stock;

export const getAllProducts = createSelector(
  selectProducts,
  (state: StockState) => state.products.map(({inStock, ...item}) => item)
);

export const getProductsWithCategories = (categories: string[]) =>
  createSelector(selectProducts, (product: StockState) => {
    return product.products.filter((value) => {
      return categories.includes(value.category);
    });
  });

export const getNumberOfProductsWithIdInStock = (id: number) => createSelector(
  selectProducts,
  (state: StockState) => state.products.find((product) => product.id === id)?.inStock || 0
)




