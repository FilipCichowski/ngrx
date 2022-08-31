import {Component, Input, OnDestroy, OnInit} from '@angular/core';
import {Store} from "@ngrx/store";
import {map, Observable, Subscription} from "rxjs";
import {Product} from "../../utilities/Product";
import {clearCart, deleteAllProductsWithId} from "../../states/cart/cart.actions";
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
  productInStock$!: Observable<number>;
  productInStock!: number;
  product!: Product;
  productSubscription!: Subscription;
  private amountSubscription!: Subscription;

  constructor(private store: Store<any>) { }

  ngOnInit(): void {
    this.numberOfProducts$ = this.store.pipe(
      map(state => state.cart.products.filter((p: Product) => p.id === this.id).length)
    )
    this.product$ = this.store.pipe(
      map(state => state.cart.products.filter((p: Product) => p.id === this.id)[0])
    )
    this.productInStock$ = this.store.pipe(
      map(state => state.stock.products.find((product: Product) => product.id === this.id).inStock)
    )
    this.amountSubscription = this.numberOfProducts$.subscribe(amount => this.productInStock = amount);
    this.productSubscription =this.product$.subscribe(p => this.product = p)
  }

  ngOnDestroy() {
    this.productSubscription.unsubscribe();
  }

  onMinus() {
    this.store.dispatch(removeProduct({ product: this.product, amount: 1}));
  }

  onPlus() {
    this.store.dispatch(addProducts({ product: this.product, amount: 1}));
  }

  onRemoveFromCart() {
    this.store.dispatch(removeProduct({ product: this.product, amount: this.productInStock}));
    this.store.dispatch(clearCart());
  }
}
