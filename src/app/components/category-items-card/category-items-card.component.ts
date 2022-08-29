import {Component, Input, OnDestroy, OnInit} from '@angular/core';
import {Store} from "@ngrx/store";
import {map, Observable, Subscription} from "rxjs";
import {Product} from "../../utilities/Product";
import {addProduct, deleteProduct} from "../../states/cart/cart.actions";

@Component({
  selector: 'app-category-items-card',
  templateUrl: './category-items-card.component.html',
  styleUrls: ['./category-items-card.component.css']
})
export class CategoryItemsCardComponent implements OnInit, OnDestroy {
  @Input() id!: number;

  numberOfItems$!: Observable<number>;
  item$!: Observable<Product>;
  item!: Product;
  itemSubscription!: Subscription;

  constructor(private store: Store<any>) { }

  ngOnInit(): void {
    this.numberOfItems$ = this.store.pipe(
      map(state => state.cart.products.filter((p: Product) => p.id === this.id).length)
    )
    this.item$ = this.store.pipe(
      map(state => state.cart.products.filter((p: Product) => p.id === this.id)[0])
    )
    this.itemSubscription =this.item$.subscribe(p => this.item = p)
  }

  ngOnDestroy() {
    this.itemSubscription.unsubscribe();
  }

  onMinus() {
    console.log(this.item)
    this.store.dispatch(deleteProduct({ product: this.item}));
  }

  onPlus() {
    this.store.dispatch(addProduct({ product: this.item, amount: 1}));
  }

}
