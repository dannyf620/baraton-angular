import { MatDialog } from '@angular/material';

import { Component, OnInit, Input, OnChanges, SimpleChanges, SimpleChange } from '@angular/core';
import { Params, ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';
import { ProductDetailComponent } from '../../product-detail/product-detail.component';

@Component({
  selector: 'app-category',
  templateUrl: './category.component.html',
  styleUrls: ['./category.component.scss']
})
export class CategoryComponent implements OnInit {
  _filter;
  @Input() categories;
  @Input()
  set filter(value) {
    this._filter = value;
  }
  constructor(private route: ActivatedRoute,
    private location: Location,
    public dialog: MatDialog) { }
  ngOnChanges(changes: SimpleChanges) {
    const filter: SimpleChange = changes.filter;
    this._filter = filter.currentValue;
  }
  ngOnInit() {

  }
  goBack(): void {
    this.location.back();
  }
  buyElement(product){
    let shopRef = this.dialog.open(ProductDetailComponent, {width: '500px', height: '450px',data:product});

    shopRef.afterClosed()
      .subscribe(result => {
      });
  }
}
