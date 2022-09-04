import {Component, Input, OnDestroy, OnInit} from '@angular/core';
import {Store} from "@ngrx/store";
import {Observable, Subscription} from "rxjs";
import {Product} from "../../utilities/Product";
import {deleteProductFromCart} from "../../states/cart/cart.actions";
import {addProducts, removeProduct} from "../../states/cart-stock.actions";
import {getNumberOfProductsWithIdInCart, getProductById} from "../../states/cart/cart.selectors";
import {getNumberOfProductsWithIdInStock} from "../../states/stock/stock.selectors";
import {appState} from "../../utilities/AppState";

@Component({
  selector: 'app-category-items-card',
  templateUrl: './category-items-card.component.html',
  styleUrls: ['./category-items-card.component.css']
})
export class CategoryItemsCardComponent implements OnInit, OnDestroy {
  @Input() id!: number;

  productsInCart$!: Observable<number>;
  product$!: Observable<Product | undefined>;
  productInStock$!: Observable<number>;
  product!: Product | undefined;
  productSubscription!: Subscription;

  constructor(private store: Store<appState>) { }

  ngOnInit(): void {
    this.productsInCart$ = this.store.select(getNumberOfProductsWithIdInCart(this.id));
    this.product$ = this.store.select(getProductById(this.id));
    this.productInStock$ = this.store.select(getNumberOfProductsWithIdInStock(this.id));
    this.productSubscription =this.product$.subscribe(p => this.product = p)
  }

  ngOnDestroy() {
    this.productSubscription.unsubscribe();
  }

  onMinus() {
    if (this.product !== undefined) {
      this.store.dispatch(removeProduct({ product: this.product}));
    }
  }

  onPlus() {
    if (this.product !== undefined) {
      this.store.dispatch(addProducts({ product: this.product, amount: 1}));
    }
  }

  onRemoveFromCart() {
    if (this.product !== undefined) {
      this.store.dispatch(deleteProductFromCart({ product: this.product}));
    }
  }
}
