import {createAction, props} from '@ngrx/store';
import {Product} from '../../utilities/Product';


export const deleteProductFromCart = createAction(
  '[Cart] Delete specific product from cart',
  props<{ product: Product }>()
)

export const clearCart = createAction(
  '[Cart] Clear Cart'
)

export const placeOrder = createAction(
  '[Cart] Place Order'
)
