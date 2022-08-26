import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { StoreModule } from '@ngrx/store';
import { productReducer } from './states/product/product.reducer';
import { cartReducer } from './states/cart/cart.reducer';

import { ShopComponent } from './components/shop/shop.component';
import { ProductCardComponent } from './components/product-card/product-card.component';
import { CartComponent } from './components/cart/cart.component';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { environment } from '../environments/environment';
import { HeaderComponent } from './components/header/header.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatButtonModule} from "@angular/material/button";
import {MatIconModule} from "@angular/material/icon";
import { ProductSelectorComponent } from './components/product-selector/product-selector.component';
import {MatCardModule} from "@angular/material/card";
import { EffectsModule } from '@ngrx/effects';
import {cartEffects} from "./states/cart/cart.effects";
import {MAT_SNACK_BAR_DEFAULT_OPTIONS, MatSnackBarModule} from "@angular/material/snack-bar";
import { FlexLayoutModule } from '@angular/flex-layout';
import { CartViewComponent } from './components/cart-view/cart-view.component';
import { CategoryItemsComponent } from './components/category-items/category-items.component';
import { CategoryItemsCardComponent } from './components/category-items-card/category-items-card.component';
import {MatSidenavModule} from "@angular/material/sidenav";
import { SidenavComponent } from './components/sidenav/sidenav.component';
import {MatListModule} from "@angular/material/list";
import {navReducer} from "./states/navigation/navigation.reducer";

@NgModule({
  declarations: [
    AppComponent,
    ShopComponent,
    ProductCardComponent,
    CartComponent,
    HeaderComponent,
    ProductSelectorComponent,
    CartViewComponent,
    CategoryItemsComponent,
    CategoryItemsCardComponent,
    SidenavComponent,
  ],
    imports: [
        BrowserModule,
        AppRoutingModule,
        // StoreModule.forRoot({product: productReducer, cart: cartReducer}, {}),
        StoreModule.forRoot({}),
        StoreModule.forFeature('product', productReducer),
        StoreModule.forFeature('cart', cartReducer),
        StoreModule.forFeature('navigation', navReducer),
        StoreDevtoolsModule.instrument({
            maxAge: 25,
            logOnly: environment.production,
        }),
        BrowserAnimationsModule,
        MatButtonModule,
        MatIconModule,
        MatCardModule,
        EffectsModule.forRoot([cartEffects]),
        MatSnackBarModule,
        FlexLayoutModule,
        MatSidenavModule,
        MatListModule
    ],
  providers: [
    {provide: MAT_SNACK_BAR_DEFAULT_OPTIONS, useValue: {duration: 5000}}
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
