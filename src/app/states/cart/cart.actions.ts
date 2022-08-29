import { createAction, props } from '@ngrx/store';
import { Product } from '../../utilities/Product';

export const addProduct = createAction(
  '[Cart] Add Product',
  props<{ product: Product, amount: number }>()
);

export const deleteProduct = createAction(
  '[Cart] Delete Products ',
  props<{ product: Product }>()
);

export const clearCart = createAction(
  '[Cart] Clear Cart'
)
