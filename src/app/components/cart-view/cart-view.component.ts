import { Component, OnInit } from '@angular/core';
import {Store} from "@ngrx/store";
import {Cart} from "../../states/cart/cart.reducer";
import {map, Observable} from "rxjs";
import {Product} from "../../utilities/Product";

@Component({
  selector: 'app-cart-view',
  templateUrl: './cart-view.component.html',
  styleUrls: ['./cart-view.component.css']
})
export class CartViewComponent implements OnInit {
  items$!: any;

  constructor(private store: Store<Cart>) { }

  ngOnInit(): void {
    this.items$ = this.store.pipe(
      map(state => state)
    )
    this.items$.subscribe((state:any) => console.log(state))
  }
}
