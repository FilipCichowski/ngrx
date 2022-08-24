import { Injectable } from '@angular/core';
import { Product, ProductCategory } from '../utilities/Product';
import { of } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class ProductsService {
  constructor() {}
  stockInitialState: Product[] = [
    {
      id: 1,
      name: 'SNAILS',
      stars: 4,
      inStock: 20,
      imgUrl: 'assets/img/food.jpg',
      price: 32,
      category: ProductCategory.SNAILS,
    },
    {
      id: 2,
      name: 'BAGUETTES',
      stars: 5,
      inStock: 12,
      imgUrl: 'assets/img/pexels-jan-n-g-u-y-e-n-🍁-699953.jpg',
      price: 43,
      category: ProductCategory.BAGUETTES,
    },
    {
      id: 3,
      name: 'SNAILS',
      stars: 2,
      inStock: 4,
      imgUrl: 'assets/img/pexels-photomix-company-96633.jpg',
      price: 21.37,
      category: ProductCategory.SNAILS,
    },
    {
      id: 4,
      name: 'FROGS',
      stars: 4,
      inStock: 15,
      imgUrl: 'assets/img/pexels-foodie-factor-566566.jpg',
      price: 33,
      category: ProductCategory.FROGS,
    },
    {
      id: 5,
      name: 'BAGUETTES',
      stars: 5,
      inStock: 50,
      imgUrl: 'assets/img/pexels-pixabay-461198.jpg',
      price: 4,
      category: ProductCategory.BAGUETTES,
    },
    {
      id: 6,
      name: 'SNAILS',
      stars: 3,
      inStock: 22,
      imgUrl: 'assets/img/pexels-sydney-troxell-718742.jpg',
      price: 26,
      category: ProductCategory.SNAILS,
    },
  ];

  getProducts() {
    return of(this.stockInitialState);
  }
}
