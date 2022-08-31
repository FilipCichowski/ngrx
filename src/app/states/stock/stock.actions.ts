import { createAction, props } from '@ngrx/store';
import {Product, ProductWithStock} from '../../utilities/Product';

export const retrievedProductsList = createAction(
  '[Shop Component] Retrieved Products List',
  props<{ products: ProductWithStock[] }>()
);

export const incrementProductInStock = createAction(
  '[Shop Component] Increment Product In Stock',
  props<{ productId: number }>()
);

export const decrementProductInStock = createAction(
  '[Shop Component] Decrement Product In Stock',
  props<{ productId: number }>()
);

export const addAllProductsToList = createAction(
  '[Shop Component] Add All Products',
)
