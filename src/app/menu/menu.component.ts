import { MatDialog } from '@angular/material';
import { ProductDetailComponent } from './../product-detail/product-detail.component';
import { ShareDataService } from './../services/share-data.service';
import { ActivatedRoute, Router } from '@angular/router';
import { ProductsService } from './../services/products.service';
import { Component, OnInit } from '@angular/core';
import { ObservableMedia, MediaChange } from '@angular/flex-layout';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss']
})
export class MenuComponent implements OnInit {
  opened = true;
  over = 'side';
  expandHeight = '42px';
  collapseHeight = '42px';
  displayMode = 'flat';
  // overlap = false;
  social;
  watcher: Subscription;
  categories: any[];
  constructor(media: ObservableMedia, public producService: ProductsService,
    private route: ActivatedRoute,
    private router: Router,
    public shareService: ShareDataService,
    public dialog: MatDialog) {
    this.social = {
      "facebook": "https://www.facebook.com/",
      "twitter": "https://www.twitter.com/",
      "google": "https://www.google.com/"
    }
    this.watcher = media.subscribe((change: MediaChange) => {
      if (change.mqAlias === 'sm' || change.mqAlias === 'xs') {
        this.opened = false;
        this.over = 'over';
      } else {
        this.opened = true;
        this.over = 'side';
      }
    });
  }
  insetInSublevel(item) {
    item.forEach(level => {
      level.children = this.producService.getFromLevel(level.id);

      if (level.sublevels) {
        this.insetInSublevel(level.sublevels);
      }
    });
  }
  ngOnInit() {
    this.categories = this.producService.getCategories();
    this.insetInSublevel(this.categories);
    // this.categories.forEach((category) => {
    //   // console.log(category.name, category.id, this.producService.getFromLevel(category.id));
    //   // category.children=this.producService.getFromLevel(category.id);
    //   this.insetInSublevel(category.sublevels);
    // });
    // console.log(JSON.stringify(this.categories));
  }
  goCategori(cat, level: number) {
    this.shareService.setCategorie([cat]);
    this.router.navigate(['/products']);

  }
  buyElement(product){
    let shopRef = this.dialog.open(ProductDetailComponent, {width: '500px', height: '450px',data:product});

    shopRef.afterClosed()
      .subscribe(result => {
      });
  }
}