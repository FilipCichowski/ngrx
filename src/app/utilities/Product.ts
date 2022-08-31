export interface ProductWithStock extends Product{
  inStock: number;
}

export interface Product {
  name: string;
  stars: number;
  id: number;
  imgUrl: string;
  price: number;
  category: ProductCategory;
}

export enum ProductCategory {
  SNAILS = 'SNAILS',
  BAGUETTES = 'BAGUETTES',
  FROGS = 'FROGS',
}

export interface cartProduct {
  id: number;
  amt: number;
}
