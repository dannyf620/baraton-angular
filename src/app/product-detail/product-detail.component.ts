import { Router } from '@angular/router';
import { ShoppingService } from './../services/shopping.service';
import { Component, OnInit, Inject } from '@angular/core';
import { Product } from '../../shared/Products';
import {MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material';


@Component({
  selector: 'app-product-detail',
  templateUrl: './product-detail.component.html',
  styleUrls: ['./product-detail.component.scss']
})
export class ProductDetailComponent implements OnInit {
  product:Product;
  quantity = 1;
  error = false;
  addedToCart = false;
  constructor(public dialogRef: MatDialogRef<ProductDetailComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any,
    private cartService:ShoppingService,
    private route:Router) { }

  ngOnInit() {
    console.log(this.data);
    
  }
  addToCart(){
    this.cartService.addToCart(this.data,this.quantity);
    this.addedToCart = true;    
    this.dialogRef.updateSize('500px','210px');
    // this.dialogRef.close(true);         
  }
  goToShoppingCart(){
    this.route.navigate(['/cart']);
    this.dialogRef.close();
  }
}
