import { ShoppingService } from './../services/shopping.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-shopping-cart',
  templateUrl: './shopping-cart.component.html',
  styleUrls: ['./shopping-cart.component.scss']
})
export class ShoppingCartComponent implements OnInit {
  products;
  constructor(public shoppingService: ShoppingService) { }

  ngOnInit() {
    this.products = this.shoppingService.getCartProduct();
    console.log(this.products);
  }
  removeFromCart(item){
    this.shoppingService.removeFromCart(item);
    this.products =  this.shoppingService.getCartProduct();
  }
  getSubtotal(){
    return this.products.map(product => product.quantity * product.item.price).reduce((prev, next) => prev + next);
  }
}
