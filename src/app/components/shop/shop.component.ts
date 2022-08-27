import { Component } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';

import { ProductCategory } from '../../utilities/Product';
import * as productActions from '../../states/product/product.actions';
import * as productSelectors from '../../states/product/product.selectors';
import { ProductsService } from '../../services/products.service';
import { productAppState } from '../../states/AppState';

@Component({
  selector: 'app-shop',
  templateUrl: './shop.component.html',
  styleUrls: ['./shop.component.scss'],
})
export class ShopComponent {
  products$ = this.store.select(productSelectors.selectAllProducts);
  categories = ProductCategory;
  filters: string[] = [];

  constructor(
    private store: Store<productAppState>,
    private service: ProductsService
  ) {
    this.service.getProducts().subscribe((products) => {
      this.store.dispatch(productActions.retrievedProductsList({ products }));
    });
  }

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
      ? (this.products$ = this.store.select(productSelectors.selectAllProducts))
      : (this.products$ = this.store.select(
          productSelectors.selectProductByCategories(this.filters)
        ));
  }
}
