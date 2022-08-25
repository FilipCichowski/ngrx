import { Component } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';

import * as cartActions from '../../states/cart/cart.actions';
import {Product} from "../../utilities/Product";
//import * as cartSelectors from 'src/app/states/cart/cart.selectors';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.scss'],
})
export class CartComponent {
  cart$!: Observable<Product[]>;

  constructor(private store: Store<{ cart: Product[] }>) {
    this.cart$ = this.store.select('cart');
  }
}
