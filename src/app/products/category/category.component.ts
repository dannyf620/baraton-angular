
import { Component, OnInit, Input } from '@angular/core';
import { Params, ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';

@Component({
  selector: 'app-category',
  templateUrl: './category.component.html',
  styleUrls: ['./category.component.scss']
})
export class CategoryComponent implements OnInit {
  @Input() categories;
  @Input() filter;
  constructor(private route: ActivatedRoute,
    private location: Location) { }

  ngOnInit() {

  }
  goBack(): void {
    this.location.back();
  }
}
