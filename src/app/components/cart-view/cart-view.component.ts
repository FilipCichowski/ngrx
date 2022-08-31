import {Component, OnInit} from '@angular/core';
import {Store} from "@ngrx/store";
import {Product, ProductCategory} from "../../utilities/Product";
import {map, Observable} from "rxjs";
import {clearCart} from "../../states/cart/cart.actions";
import {Router} from "@angular/router";

@Component({
  selector: 'app-cart-view',
  templateUrl: './cart-view.component.html',
  styleUrls: ['./cart-view.component.css']
})
export class CartViewComponent implements OnInit {
  items$!: Observable<Product[]>;
  categories$!: Observable<any>;
  categories = Object.keys(ProductCategory);

  constructor(private store: Store<any>, private router: Router) { }

  ngOnInit(): void {
    this.items$ = this.store.pipe(
      map(state => state.cart.products)
    )
    this.categories$ = this.store.pipe(
      map(state => [...new Set(state.cart.products.map((product: Product) => product.category))])
    )
  }

  onClearCart(): void {
    this.store.dispatch(clearCart());
  }

  onPlaceOrder(): void {
    this.router.navigate(['/success']);
    this.onClearCart();
  }

}
