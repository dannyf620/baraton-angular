import { CategoryComponent } from './products/category/category.component';

import { MenuItemComponent } from './menu/menu-item/menu-item.component';
import { AppRoutingModule } from './app-routing/app-routing.module';
import { AngularMaterialModule } from './angular-material/angular-material.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FlexLayoutModule } from "@angular/flex-layout";

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { ContactComponent } from './contact/contact.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { MenuComponent } from './menu/menu.component';
import { ProductsComponent } from './products/products.component';
import { ProductDetailComponent } from './product-detail/product-detail.component';
import { FilterProductPipe } from './pipes/filter-product.pipe';
import { FormsModule } from '@angular/forms';
import { MyCartComponent } from './my-cart/my-cart.component';
import { ShoppingCartComponent, BottomConfirm, purchaseConfirm } from './shopping-cart/shopping-cart.component';



@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    HomeComponent,
    AboutComponent,
    ContactComponent,
    NotFoundComponent,
    MenuComponent,
    ProductsComponent,
    ProductDetailComponent,
    MenuItemComponent,
    CategoryComponent,
    FilterProductPipe,
    MyCartComponent,
    ShoppingCartComponent,
    BottomConfirm,
    purchaseConfirm
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AngularMaterialModule,
    FlexLayoutModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  entryComponents:[BottomConfirm,purchaseConfirm],
  bootstrap: [AppComponent]
})
export class AppModule { }
