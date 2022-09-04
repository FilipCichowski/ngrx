import {addProducts, removeProduct} from "../cart-stock.actions";
import {cartReducer, CartState} from "./cart.reducer";
import { appState } from "../../utilities/AppState";
import {ProductCategory} from "../../utilities/Product";
import { getTestState } from "../generate-test-state";

let state: appState;
let cart: CartState;

const product = {
    id: 1,
    name: 'SNAILS',
    stars: 4,
    imgUrl: 'assets/images/food.jpg',
    price: 32,
    category: ProductCategory.SNAILS,
}

beforeEach(() => {
  state = getTestState();
  cart = state.cart;
})

describe("CartReducer", () => {
  it("should add specified amount of product", () => {
    const action = addProducts({product: product, amount: 1});
    const newState = cartReducer(cart, action);
    const expectedState = {
      products: [...cart.products, product]
    }
    expect(newState).toEqual(expectedState);
  })
  it("should remove products from cart", () => {
    const cartWithProductAdded = {
      products: [product, ...cart.products]
    }
    const action = removeProduct({product: product});
    const newState = cartReducer(cartWithProductAdded, action);
    expect(newState).toEqual(cart);
  })
})
