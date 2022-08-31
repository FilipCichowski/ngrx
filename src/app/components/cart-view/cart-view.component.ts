import {Component, OnInit} from '@angular/core';
import {Store} from "@ngrx/store";
import {Product} from "../../utilities/Product";
import {Observable} from "rxjs";
import {clearCart, placeOrder} from "../../states/cart/cart.actions";
import {getProductsCategories, getStockProducts} from "../../states/cart/cart.selectors";
import {appState} from "../../states/AppState";


@Component({
  selector: 'app-cart-view',
  templateUrl: './cart-view.component.html',
  styleUrls: ['./cart-view.component.css']
})
export class CartViewComponent implements OnInit {
  stockProducts$!: Observable<Product[]>;
  productsCategories$!: Observable<string[]>;

  constructor(private store: Store<appState>) { }

  ngOnInit(): void {
    this.stockProducts$ = this.store.select(getStockProducts)
    this.productsCategories$ = this.store.select(getProductsCategories);
  }

  onClearCart(): void {
    this.store.dispatch(clearCart());
  }

  onPlaceOrder(): void {
    this.store.dispatch(placeOrder());
  }

}
