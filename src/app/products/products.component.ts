import { ProductsService } from './../services/products.service';
import { Component, OnInit, NgZone } from '@angular/core';
import { Params, ActivatedRoute, Router, NavigationEnd } from '@angular/router';
import { Location } from '@angular/common';
import { ShareDataService } from '../services/share-data.service';
interface Filter {
  availability?: boolean;
  range?: number[];
  stock?: number;
}

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss']
})
export class ProductsComponent implements OnInit {
  categories;
  filter: Filter = { stock: null, availability: true, range: [null, null] }

  constructor(private route: ActivatedRoute,
    private location: Location,
    private router: Router,
    public shareService: ShareDataService,
    public productsSevice: ProductsService,
    public _ngZone: NgZone) {
    this.router.routeReuseStrategy.shouldReuseRoute = function () {
      return false;
    }

    this.router.events.subscribe((evt) => {
      if (evt instanceof NavigationEnd) {
        // trick the Router into believing it's last link wasn't previously loaded
        this.router.navigated = false;

        window.scrollTo(0, 0);
      }
    });
  }

  ngOnInit() {
    let data = this.shareService.getCategorie();
    if (!data) {
      data = this.productsSevice.getMatch();
    }
    this.categories = data;
  }
  getAllProducts() {

  }
  goBack(): void {
    this.location.back();
  }
  toggleChange(event) {
    this.filter.availability = event.checked;
  }
  makeFilter() {
    // this._ngZone.run(()=>{
    //   console.log(this.filter);
    // })
  }
}
