import { ShoppingService } from './../services/shopping.service';
import { ShareDataService } from './../services/share-data.service';
import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  cartItems: any[] = [];
  @Input() social;
  @Output() openMenuEmitter = new EventEmitter();
  constructor(public router: Router,
    public shareService: ShareDataService,
    public shoppingService: ShoppingService) {
  }

  ngOnInit() {
    this.shoppingService.productsRef.subscribe((items) => {
      console.log(items)
      this.cartItems = items;
    })
  }
  navigate(page) {
    this.router.navigate([page])
  }
  openMenu() {
    this.openMenuEmitter.emit('');
  }
  goToProducts() {
    this.shareService.setCategorie(undefined);
  }
}
