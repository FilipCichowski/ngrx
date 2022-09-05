import {TestBed} from "@angular/core/testing";
import {MatSnackBar, MatSnackBarModule} from "@angular/material/snack-bar";
import {Router} from "@angular/router";
import {RouterTestingModule} from "@angular/router/testing";
import {provideMockActions} from "@ngrx/effects/testing";
import {MockStore, provideMockStore} from "@ngrx/store/testing";
import {provideMock} from "@testing-library/angular/jest-utils";
import {Observable, of} from "rxjs";
import {placeOrder} from "./cart.actions";
import {cartEffects} from "./cart.effects";

let actions$: Observable<any>;
let effects: any;
let store: MockStore;
let router: Router;

beforeEach(() => {
  TestBed.configureTestingModule({
    providers: [
      cartEffects,
      provideMockStore({}),
      provideMock(Router),
      provideMockActions(() => actions$),
      provideMock(MatSnackBar)
    ],
    imports: [
      MatSnackBarModule
    ]
  })

  effects = TestBed.inject(cartEffects);
  store = TestBed.inject(MockStore);
  router = TestBed.inject(Router);
})

describe('CartEffects', () => {
  it('should open dialog after placing order and redirect', () => {
    actions$ = of(placeOrder());
    effects.placeOrderEffect$.subscribe(() => {
      expect(effects.openSnack).toHaveBeenCalled();
      expect(router.navigate).toHaveBeenCalled();
    })
  })
})
