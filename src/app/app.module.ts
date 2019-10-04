import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { FirstComponent } from 'src/first/first.component';
import { ProductComponent } from 'src/products/components/product/product.component';
import { ProductListComponent } from 'src/products/components/product-list/product-list.component';
import { CartComponent } from 'src/cart/components/cart/cart.component';

@NgModule({
  declarations: [
    AppComponent,
    FirstComponent,
    ProductComponent,
    ProductListComponent,
    CartComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
