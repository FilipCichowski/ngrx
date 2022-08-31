import { Component } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';

import {ProductCategory, Product} from '../../utilities/Product';
import * as stockSelectors from '../../states/stock/stock.selectors';
import { productAppState } from '../../states/AppState';

@Component({
  selector: 'app-shop',
  templateUrl: './shop.component.html',
  styleUrls: ['./shop.component.css'],
})
export class ShopComponent {
  products$: Observable<Product[]> = this.store.select(stockSelectors.selectAllProducts);
  categories = ProductCategory;
  filters: string[] = [];

  constructor(
    private store: Store<productAppState>,
  ) {}

  onFilterSelected(key: string){
    this.showProduct(key);
  }

  showProduct(key: string) {
    if (this.filters.includes(key)) {
      this.filters = this.filters.filter((ele) => {
        return ele != key;
      });
    } else {
      this.filters.push(key);
    }

    this.filters.length === 0
      ? (this.products$ = this.store.select(stockSelectors.selectAllProducts))
      : (this.products$ = this.store.select(
          stockSelectors.selectProductByCategories(this.filters)
        ));
  }
}
