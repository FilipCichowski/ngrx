import { createAction, props } from '@ngrx/store';
import {Product} from "../utilities/Product";

export const addProducts = createAction(
  '[Cart-Stock] Add Product',
  props<{ product: Product, amount: number }>()
);

export const removeProduct = createAction(
  '[Cart-Stock] Remove Product',
  props<{ product: Product}>()
);
