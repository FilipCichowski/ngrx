import {Component, Input, OnInit} from '@angular/core';
import {Store} from '@ngrx/store';

import {Product} from '../../utilities/Product';
import {addProducts} from "../../states/cart-stock.actions";
import {Observable} from "rxjs";
import {appState} from "../../utilities/AppState";
import {getNumberOfProductsWithIdInStock} from "../../states/stock/stock.selectors";


@Component({
  selector: 'app-product-card',
  templateUrl: './product-card.component.html',
  styleUrls: ['./product-card.component.css'],
})
export class ProductCardComponent implements OnInit {
  @Input() item!: Product;

  productsInStock$!: Observable<number>;
  orderAmount: number = 0;

  constructor(private store: Store<appState>) {}

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
    this.productsInStock$ = this.store.select(getNumberOfProductsWithIdInStock(this.item.id))
  }

}
