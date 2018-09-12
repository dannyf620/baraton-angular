import { Component, OnInit, Input } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  cartItems: any[]=[];
  @Input() social;
  constructor(public route: Router) {    
  }

  ngOnInit() {

  }
  navigate(page) {

  }
}
