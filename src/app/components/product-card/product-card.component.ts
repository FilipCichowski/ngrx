import { Component, Input } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';

import { Product } from '../../utilities/Product';
import * as productActions from '../../states/product/product.actions';
import * as productSelectors from '../../states/product/product.selectors';
import {addProduct, deleteSingleProductWithId} from '../../states/cart/cart.actions';

@Component({
  selector: 'app-product-card',
  templateUrl: './product-card.component.html',
  styleUrls: ['./product-card.component.css'],
})
export class ProductCardComponent {
  @Input() item!: Product;

  orderAmount: number = 0;

  constructor(private store: Store<any>) {}

  onPlus(productId: number) {
    this.orderAmount++;
  }

  onMinus(productId: number) {
    this.orderAmount--;
  }

  onAddOrders() {
    this.store.dispatch(addProduct({ product: this.item, amount: this.orderAmount}));
  }


}
