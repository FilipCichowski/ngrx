import {Component, Input, OnInit} from '@angular/core';
import {Observable} from "rxjs";
import {Store} from "@ngrx/store";
import {appState} from "../../states/AppState";
import {getProductsIdByCategory} from "../../states/cart/cart.selectors";

@Component({
  selector: 'app-category-items',
  templateUrl: './category-items.component.html',
  styleUrls: ['./category-items.component.css']
})
export class CategoryItemsComponent implements OnInit {
  @Input() category!: string;

  productsId$!: Observable<number[]>;

  constructor(private store: Store<appState>) { }

  ngOnInit(): void {
    this.productsId$ = this.store.select(getProductsIdByCategory(this.category));
  }
}


