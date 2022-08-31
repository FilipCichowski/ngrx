import {Component, Input, OnDestroy, OnInit} from '@angular/core';
import {Store} from "@ngrx/store";
import {map, Observable, Subscription} from "rxjs";
import {Product} from "../../utilities/Product";
import {deleteAllProductsWithId} from "../../states/cart/cart.actions";
import {addProducts, removeProduct} from "../../states/cart-stock.action";

@Component({
  selector: 'app-category-items-card',
  templateUrl: './category-items-card.component.html',
  styleUrls: ['./category-items-card.component.css']
})
export class CategoryItemsCardComponent implements OnInit, OnDestroy {
  @Input() id!: number;

  numberOfProducts$!: Observable<number>;
  product$!: Observable<Product>;
  productAmount$!: Observable<number>;
  product!: Product;
  productSubscription!: Subscription;

  constructor(private store: Store<any>) { }

  ngOnInit(): void {
    this.numberOfProducts$ = this.store.pipe(
      map(state => state.cart.products.filter((p: Product) => p.id === this.id).length)
    )
    this.product$ = this.store.pipe(
      map(state => state.cart.products.filter((p: Product) => p.id === this.id)[0])
    )
    this.productAmount$ = this.store.pipe(
      map(state => state.stock.products.find((product: Product) => product.id === this.id).inStock)
    )
    this.productSubscription =this.product$.subscribe(p => this.product = p)
  }

  ngOnDestroy() {
    this.productSubscription.unsubscribe();
  }

  onMinus() {
    this.store.dispatch(removeProduct({ product: this.product}));
  }

  onPlus() {
    this.store.dispatch(addProducts({ product: this.product, amount: 1}));
  }

  onRemoveFromCart() {
    this.store.dispatch(deleteAllProductsWithId({ product: this.product}))
  }

}
