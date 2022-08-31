import {Component, OnInit} from '@angular/core';
import {Store} from "@ngrx/store";
import {Product, ProductCategory} from "../../utilities/Product";
import {map, Observable} from "rxjs";
import {clearCart, placeOrder} from "../../states/cart/cart.actions";
import {Router} from "@angular/router";
import {getProductsCategories, getStockProducts} from "../../states/cart/cart.selectors";


@Component({
  selector: 'app-cart-view',
  templateUrl: './cart-view.component.html',
  styleUrls: ['./cart-view.component.css']
})
export class CartViewComponent implements OnInit {
  stockProducts$!: Observable<Product[]>;
  productsCategories$!: Observable<any>;
  allCategories = Object.keys(ProductCategory);

  constructor(private store: Store<any>, private router: Router) { }

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
