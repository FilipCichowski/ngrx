import {ComponentFixture, inject, TestBed} from "@angular/core/testing";
import {ProductCardComponent} from "./product-card.component";
import {By} from "@angular/platform-browser";
import {DebugElement} from "@angular/core";
import {Store} from "@ngrx/store";
import {TestStore} from "../../../testing/store";
import {appState} from "../../utilities/AppState";
import {MatCardModule} from "@angular/material/card";
import {StarRatingModule} from "angular-star-rating";
import {IsSmallerOrEqualThanPipe} from "../../pipes/is-smaller-or-equal-than.pipe";
import {of} from "rxjs";
import {MockStore, provideMockStore} from "@ngrx/store/testing";
import {getNumberOfProductsWithIdInStock} from "../../states/stock/stock.selectors";
import {MatIconModule} from "@angular/material/icon";

describe('ProductCard Component', () => {
  let fixture: ComponentFixture<ProductCardComponent>;
  let debugElement: DebugElement;
  let store: MockStore;

  const initialState = {
    stock: {
      products: []
    },
    cart: {
      products: []
    },
    navigation: {
      isSidebarOpen: false
    }
  }


  const productsInStock = 0;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [
        ProductCardComponent,
        IsSmallerOrEqualThanPipe
      ],
      providers: [
        provideMockStore({
          initialState: initialState,
          selectors: [
            { selector: getNumberOfProductsWithIdInStock(0), value: 0}
          ]
        })
      ],
      imports: [
        MatCardModule,
        StarRatingModule.forRoot(),
        MatIconModule
      ]
    }).compileComponents();

    store = TestBed.inject(MockStore);

    fixture = TestBed.createComponent(ProductCardComponent);
    fixture.detectChanges();
    debugElement = fixture.debugElement;
  })

  it('increments the order amount', () => {
    // Act
    const incrementButton = debugElement.query(
      By.css('[data-testid="increment-button-product-card"]')
    );
    incrementButton.triggerEventHandler('click', null);
    fixture.detectChanges();
    // Assert
    const countOutput = debugElement.query(
      By.css('[data-testid="count-product-card"]')
    );
    expect(countOutput.nativeElement.textContent).toBe('1');
  })
})
