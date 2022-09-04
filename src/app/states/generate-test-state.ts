import { props } from "@ngrx/store";
import {CartState} from "./cart/cart.reducer";
import {StockState} from "./stock/stock.reducer";
import {appState} from "src/app/utilities/AppState";
import {Product, ProductCategory, ProductWithStock} from "../utilities/Product";
import { NavigationState } from "./navigation/navigation.reducer";

const stockProducts: StockState = {
  products: [
    {
      id: 1,
      name: 'SNAILS',
      stars: 4,
      inStock: 20,
      imgUrl: 'assets/images/food.jpg',
      price: 32,
      category: ProductCategory.SNAILS,
    },
{
  id: 2,
    name: 'BAGUETTES',
  stars: 5,
  inStock: 12,
  imgUrl: 'assets/images/pexels-jan-n-g-u-y-e-n-🍁-699953.jpg',
  price: 43,
  category: ProductCategory.BAGUETTES,
},
{
  id: 3,
    name: 'SNAILS',
  stars: 2,
  inStock: 4,
  imgUrl: 'assets/images/pexels-photomix-company-96633.jpg',
  price: 21.37,
  category: ProductCategory.SNAILS,
},
{
  id: 4,
    name: 'FROGS',
  stars: 4,
  inStock: 15,
  imgUrl: 'assets/images/pexels-foodie-factor-566566.jpg',
  price: 33,
  category: ProductCategory.FROGS,
},
{
  id: 5,
    name: 'BAGUETTES',
  stars: 5,
  inStock: 50,
  imgUrl: 'assets/images/pexels-pixabay-461198.jpg',
  price: 4,
  category: ProductCategory.BAGUETTES,
},
{
  id: 6,
    name: 'SNAILS',
  stars: 3,
  inStock: 22,
  imgUrl: 'assets/images/pexels-sydney-troxell-718742.jpg',
  price: 26,
  category: ProductCategory.SNAILS,
},
{
  id: 7,
    name: 'FROGS',
  stars: 3,
  inStock: 22,
  imgUrl: 'assets/images/pexels-chevanon-photography-323682.jpg',
  price: 26,
  category: ProductCategory.FROGS,
},
{
  id: 8,
    name: 'BAGUETTES',
  stars: 3,
  inStock: 22,
  imgUrl: 'assets/images/pexels-rajesh-tp-1633525.jpg',
  price: 26,
  category: ProductCategory.BAGUETTES,
},
{
  id: 9,
    name: 'FROGS',
  stars: 3,
  inStock: 22,
  imgUrl: 'assets/images/pexels-vlada-karpovich-6947301.jpg',
  price: 26,
  category: ProductCategory.FROGS,
},
]
}

const cartProducts: CartState = {
  products: [
    {
      id: 1,
      name: 'SNAILS',
      stars: 4,
      imgUrl: 'assets/images/food.jpg',
      price: 32,
      category: ProductCategory.SNAILS,
    },
    {
      id: 2,
      name: 'BAGUETTES',
      stars: 5,
      imgUrl: 'assets/images/pexels-jan-n-g-u-y-e-n-🍁-699953.jpg',
      price: 43,
      category: ProductCategory.BAGUETTES,
    },
    {
      id: 4,
      name: 'FROGS',
      stars: 4,
      imgUrl: 'assets/images/pexels-foodie-factor-566566.jpg',
      price: 33,
      category: ProductCategory.FROGS,
    }
  ]
}
const navigation: NavigationState = {
  isSidebarOpen: false
}

export const getTestState = () => {
  return {
    stock: JSON.parse(JSON.stringify(stockProducts)),
    cart: JSON.parse(JSON.stringify(cartProducts)),
    navigation: JSON.parse(JSON.stringify(navigation)),
  }
}
