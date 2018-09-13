import { Component, Input, OnInit, ViewChild } from '@angular/core';


@Component({
  selector: 'app-menu-item',
  templateUrl: './menu-item.component.html',
  styleUrls: ['./menu-item.component.scss']
})
export class MenuItemComponent implements OnInit {
  @Input() items;
  @ViewChild('childMenu') public childMenu;

  constructor() {
  }

  ngOnInit() {
    setTimeout(() => {
      
      console.log("input ->", this.items);
      console.log(this.childMenu);
    }, 500);
  }

}
