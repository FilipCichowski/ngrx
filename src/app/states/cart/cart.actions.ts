import { createAction, props } from '@ngrx/store';
import { Product } from '../../utilities/Product';

export const addProduct = createAction(
  '[Cart Component] Add Product',
  props<{ product: Product, amount: number }>()
);

export const deleteProduct = createAction(
  '[Cart Component] Delete Products ',
  props<{ product: Product }>()
);
