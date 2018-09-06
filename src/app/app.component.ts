import { Category, Sublevel } from './../shared/Categories';
import { ProductsService } from './services/products.service';
import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'app';
  categories: Category[];
  constructor(public producService: ProductsService) {
    this.categories = this.producService.getCategories()
    console.log(this.categories);
    console.log(" producto 58b5a5b1ef62cb996bb87c45: ",this.producService.getProduct("58b5a5b1ef62cb996bb87c45"))

    this.categories.forEach(category => {
      console.log("----> "+category.name)
        this.printBySublevel(category.sublevels);
      
    });
  }
  printBySublevel(sublevel: Sublevel[]) {
    if (sublevel) {
      // console.log(sublevel);
      sublevel.forEach(item => {
        // console.log(item.name, item.id);
        console.log(item.name,item.id, this.producService.getFromLevel(item.id));
        this.printBySublevel(item.sublevels);
      });
    }
  }
}
