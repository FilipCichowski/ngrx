import { Component, Input, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';

import { Product } from '../../utilities/Product';
import {addProducts} from "../../states/cart-stock.action";
import {filter, map, Observable} from "rxjs";


@Component({
  selector: 'app-product-card',
  templateUrl: './product-card.component.html',
  styleUrls: ['./product-card.component.css'],
})
export class ProductCardComponent implements OnInit {
  @Input() item!: Product;
  productAmount$!: Observable<Product>;

  orderAmount: number = 0;

  constructor(private store: Store<any>) {}

  onPlus(productId: number) {
    this.orderAmount++;
  }

  onMinus(productId: number) {
    this.orderAmount--;
  }

  onAddOrders() {
    this.store.dispatch(addProducts({ product: this.item, amount: this.orderAmount}));
  }

  ngOnInit() {
    this.productAmount$ = this.store.pipe(
      map(state => state.stock.products.find((product: Product) => product.id === this.item.id).inStock)
    )
  }

}
