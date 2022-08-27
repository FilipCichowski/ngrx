import { Component, OnInit } from '@angular/core';
import {Store} from "@ngrx/store";
import {ProductCategory} from "../../utilities/Product";
import {map, Observable} from "rxjs";
import {Product} from "../../utilities/Product";

@Component({
  selector: 'app-cart-view',
  templateUrl: './cart-view.component.html',
  styleUrls: ['./cart-view.component.css']
})
export class CartViewComponent implements OnInit {
  items$!: Observable<Product[]>;
  categories = Object.keys(ProductCategory);

  constructor(private store: Store<any>) { }

  ngOnInit(): void {
    this.items$ = this.store.pipe(
      map(state => state.cart.products)
    )
  }
}
