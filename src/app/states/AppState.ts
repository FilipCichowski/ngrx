import { StockState } from './stock/stock.reducer';
import {CartState} from "./cart/cart.reducer";
import { NavigationState } from './navigation/navigation.reducer';

export interface productAppState {
  stock: StockState;
  cart: CartState;
  navigation: NavigationState;
}
