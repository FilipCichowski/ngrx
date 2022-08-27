import {Component, Input, OnInit} from '@angular/core';
import {Product} from "../../utilities/Product";
import {map, Observable} from "rxjs";
import {Store} from "@ngrx/store";

@Component({
  selector: 'app-category-items',
  templateUrl: './category-items.component.html',
  styleUrls: ['./category-items.component.css']
})
export class CategoryItemsComponent implements OnInit {
  @Input() category!: string;

  productId$!: Observable<any>;

  constructor(private store: Store<any>) { }

  ngOnInit(): void {
    this.productId$ = this.store.pipe(
      map(state => [...new Set(state.cart.products.filter((item: Product) => item.category === this.category).map((item: Product) => item.id))])
    )
  }
}


