import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { stockReducer } from './states/stock/stock.reducer';
import { cartReducer } from './states/cart/cart.reducer';
import {navReducer} from "./states/navigation/navigation.reducer";
import { StoreModule } from '@ngrx/store';
import {cartEffects} from "./states/cart/cart.effects";
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { EffectsModule } from '@ngrx/effects';
import { environment } from '../environments/environment';

import { MatListModule } from "@angular/material/list";
import { MatSidenavModule } from "@angular/material/sidenav";
import {MAT_SNACK_BAR_DEFAULT_OPTIONS, MatSnackBarModule} from "@angular/material/snack-bar";
import {MatCardModule} from "@angular/material/card";
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatButtonModule } from "@angular/material/button";
import { MatIconModule } from "@angular/material/icon";

import { StarRatingModule } from 'angular-star-rating';

import { ShopComponent } from './components/shop/shop.component';
import { HeaderComponent } from './components/header/header.component';
import { SidenavComponent } from './components/sidenav/sidenav.component';
import { CartViewComponent } from './components/cart-view/cart-view.component';
import { CategoryItemsComponent } from './components/category-items/category-items.component';
import { CategoryItemsCardComponent } from './components/category-items-card/category-items-card.component';
import { ProductSelectorComponent } from './components/product-selector/product-selector.component';

import { ProductCardComponent } from './components/product-card/product-card.component';
import { TotalPriceCartItemsPipe } from './pipes/total-price-cart-items.pipe';
import { ArrLengthPipe } from './pipes/arr-length.pipe';
import { IsNotNullOrZeroPipe } from './pipes/is-not-null-or-zero.pipe';
import { SuccessComponent } from './components/success/success.component';
import { StartComponent } from './components/start/start.component';
import { IsGreaterThanOrEqualPipe } from './pipes/is-greater-than-or-equal.pipe';
import { IsSmallerOrEqualThanPipe } from './pipes/is-smaller-or-equal-than.pipe';

@NgModule({
  declarations: [
    AppComponent,
    ShopComponent,
    ProductCardComponent,
    HeaderComponent,
    ProductSelectorComponent,
    CartViewComponent,
    CategoryItemsComponent,
    CategoryItemsCardComponent,
    SidenavComponent,
    TotalPriceCartItemsPipe,
    ArrLengthPipe,
    IsNotNullOrZeroPipe,
    SuccessComponent,
    StartComponent,
    IsGreaterThanOrEqualPipe,
    IsSmallerOrEqualThanPipe,
  ],
    imports: [
        BrowserModule,
        AppRoutingModule,
        // StoreModule.forRoot({stock: stockReducer, cart: cartReducer}, {}),
        StoreModule.forRoot({}),
        StoreModule.forFeature('stock', stockReducer),
        StoreModule.forFeature('cart', cartReducer),
        StoreModule.forFeature('navigation', navReducer),
        StoreDevtoolsModule.instrument({
            maxAge: 25,
            logOnly: environment.production,
        }),
        EffectsModule.forRoot([cartEffects]),
        StarRatingModule.forRoot(),
        BrowserAnimationsModule,
        MatButtonModule,
        MatIconModule,
        MatCardModule,
        MatSnackBarModule,
        MatSidenavModule,
        MatListModule
    ],
  providers: [
    {provide: MAT_SNACK_BAR_DEFAULT_OPTIONS, useValue: {duration: 5000}}
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
