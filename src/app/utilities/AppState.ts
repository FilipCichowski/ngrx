import {StockState} from '../states/stock/stock.reducer';
import {CartState} from "../states/cart/cart.reducer";
import {NavigationState} from '../states/navigation/navigation.reducer';

export interface appState {
  stock: StockState;
  cart: CartState;
  navigation: NavigationState;
}
