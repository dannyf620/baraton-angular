
import { MenuComponent } from './../menu/menu.component';
import { ProductDetailComponent } from './../product-detail/product-detail.component';
import { ContactComponent } from './../contact/contact.component';
import { Routes } from '@angular/router';


import { HomeComponent } from '../home/home.component';
import { AboutComponent } from '../about/about.component';
import { NotFoundComponent } from '../not-found/not-found.component';
import { ProductsComponent } from '../products/products.component';
import { ShoppingCartComponent } from '../shopping-cart/shopping-cart.component';
export const routes: Routes = [
  // { path: 'home', component: HomeComponent, children:[
  //   {path:'overview', component: ProductsComponent},
  //   {path:'overview-detail',component:ProductDetailComponent}
  // ] },
  // { path: 'about-us', component: AboutComponent },
  // { path: '', redirectTo: '/home', pathMatch: 'full' },

  {
    path: '', component: MenuComponent, children: [
      { path: 'home', component: HomeComponent },
      { path: 'overview', component: ProductsComponent },
      { path: 'overview-detail', component: ProductDetailComponent },
      { path: '', redirectTo: '/home', pathMatch: 'full' },
      { path: 'products', component: ProductsComponent }      ,
      {path:'cart',component:ShoppingCartComponent}
    ]
  },
  // { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: '404', component: NotFoundComponent },
  { path: '**', redirectTo: '/404' }
];