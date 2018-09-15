import { ShareDataService } from './../services/share-data.service';
import { Product } from './../../shared/Products';
import { Category, Sublevel } from './../../shared/Categories';
import { ProductsService } from './../services/products.service';
import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  categories: Category[];
  bestProducts: Product[];
  constructor(public producService: ProductsService) {
    // console.log(" producto 58b5a5b1ef62cb996bb87c45: ", this.producService.getProduct("58b5a5b1ef62cb996bb87c45"))
    setTimeout(() => {
      this.bestProducts = this.producService.getHiProduct();
    }, 500);
  }

  ngOnInit() {
    this.categories = this.producService.getCategories()
  }
  
 
}
