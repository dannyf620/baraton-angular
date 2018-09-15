import { Product } from './../../shared/Products';
import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { ShareDataService } from './share-data.service';

@Injectable({
  providedIn: 'root'
})
export class ShoppingService {


  productsRef = new BehaviorSubject<any>([]);

  products: any = [];

  constructor(private shareData:ShareDataService) {
    this.products=this.shareData.getShoppingCart();
    this.productsRef.next(this.products);
  }
  getCartProduct() {
    return this.products;
  }

  addToCart(product: Product, quantity: number) {
    //Check if product already added to array
    console.log(this.products,product)
    if (this.products.filter(e => e.item.id === product.id).length > 0) {
      this.products.forEach((e) => {
        if (e.item.id == product.id) {
          e.quantity = quantity;
        }
      })
    } else {
      this.products.push({
        item: product,
        quantity: quantity
      });
    }
    this.shareData.updateShopingCart(this.products);
    this.productsRef.next(this.products);
  }
  removeFromCart(product: Product) {
    this.products = this.products.filter(e => e.item.id != product.id);
    this.productsRef.next(this.products);
  }
}