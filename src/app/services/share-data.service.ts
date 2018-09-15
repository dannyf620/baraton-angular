import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ShareDataService {
  private actualCategory;
  private shoPingCart;
  constructor() {
    this.shoPingCart = JSON.parse( localStorage.getItem('cart') || '[]');
  }
  public getCategorie() {
    return this.actualCategory;
  }
  public setCategorie(category) {
    this.actualCategory = category;
  }
  public getShoppingCart() {
    return this.shoPingCart;
  }
  public updateShopingCart(products){
    console.log(products);
    this.shoPingCart=products;
    localStorage.setItem('cart', JSON.stringify(products));
  }
}
