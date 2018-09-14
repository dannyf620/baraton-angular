
import { Component, OnInit, Input, OnChanges, SimpleChanges, SimpleChange } from '@angular/core';
import { Params, ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';

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
    private location: Location) { }
  ngOnChanges(changes: SimpleChanges) {
    const filter: SimpleChange = changes.filter;
    this._filter = filter.currentValue;
  }
  ngOnInit() {

  }
  goBack(): void {
    this.location.back();
  }
}
