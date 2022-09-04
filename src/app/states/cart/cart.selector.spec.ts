import {CartState} from "src/app/states/cart/cart.reducer";
import {Product} from "src/app/utilities/Product";
import {
  getNumberOfProductsWithIdInCart,
  getProductsCategories,
  getStockProducts,
  getTotalPriceForOrder
} from "./cart.selectors";
import {getTestState} from "../generate-test-state";
import {appState} from "../../utilities/AppState";

let state: appState;
let cart: CartState;

beforeEach(() => {
  state = getTestState()
  cart = state.cart;
})

describe("getTestState", () => {
  it("should return product categories", () => {
    expect(getProductsCategories.projector(cart)).toEqual([...new Set(cart.products.map((product: Product) => product.category))])
  })
  it('should return total price for order'), () => {
    expect(getTotalPriceForOrder.projector(cart)).toEqual(cart.products.reduce((acc: number, product: Product) => acc + product.price, 0))
  }
})
