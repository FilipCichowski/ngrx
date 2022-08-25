import { Component, Input } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';

import { Product } from '../../utilities/Product';
import * as productActions from '../../states/product/product.actions';
import * as productSelectors from '../../states/product/product.selectors';
import {addProduct, deleteProduct} from '../../states/cart/cart.actions';

@Component({
  selector: 'app-product-card',
  templateUrl: './product-card.component.html',
  styleUrls: ['./product-card.component.scss'],
})
export class ProductCardComponent {
  @Input() item!: Product;

  constructor(private store: Store<{ product: Product[] }>) {}

  onPlus(productId: number) {
    this.store.dispatch(productActions.decrementProductInStock({ productId }));
    this.store.dispatch(addProduct({ product: this.item}));
  }

  onMinus(productId: number) {
    this.store.dispatch(productActions.incrementProductInStock({ productId }));
    this.store.dispatch(deleteProduct({ product: this.item}));
  }
}
