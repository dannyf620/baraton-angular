import { ShoppingService } from './../services/shopping.service';
import { Component, OnInit } from '@angular/core';

import { MatBottomSheetRef } from '@angular/material/bottom-sheet';
import { MatBottomSheet, MatSnackBar } from '@angular/material';

@Component({
  selector: 'app-shopping-cart',
  templateUrl: './shopping-cart.component.html',
  styleUrls: ['./shopping-cart.component.scss']
})
export class ShoppingCartComponent implements OnInit {
  products;
  constructor(public shoppingService: ShoppingService,
    private bottomSheet: MatBottomSheet,

    public snackBar: MatSnackBar
    // private bottoomSheetRef: MatBottomSheetRef
  ) { }

  ngOnInit() {
    this.products = this.shoppingService.getCartProduct();
    console.log(this.products);
  }
  removeFromCart(item) {
    this.shoppingService.removeFromCart(item);
    this.products = this.shoppingService.getCartProduct();
  }
  getSubtotal() {
    return this.products.map(product => product.quantity * parseFloat(product.item.price.replace('$', '').replace(',', '.'))).reduce((prev, next) => prev + next);
  }
  buy() {
    console.log("ok");
    let sheetRef = this.bottomSheet.open(BottomConfirm);
    sheetRef.afterDismissed().subscribe((data) => {
      console.log(data);
      this.shoppingService.makeShopping();
      this.products = this.shoppingService.getCartProduct();
      this.snackBar.openFromComponent(purchaseConfirm, {
        duration: 500,
      });
    })
    // this.bottoomSheetRef.afterDismissed().subscribe((paymentType) => {
    //   console.log('Bottom sheet has been dismissed.', paymentType);
    // });
  }
}

@Component({
  selector: 'bottom-sheet-overview-example-sheet',
  template: `
  <button  mat-button (click)="CC()" >credit card
  </button>
  <button  mat-button (click)="other()">upon delivery
  </button>
  `,

})
export class BottomConfirm {
  constructor(private bottomSheetRef: MatBottomSheetRef<BottomConfirm>) { }

  openLink(event: MouseEvent): void {
    this.bottomSheetRef.dismiss('----');
    event.preventDefault();
  }
  CC() {
    this.bottomSheetRef.dismiss('----');
  }
  other() {
    this.bottomSheetRef.dismiss('+++++');
  }
}

@Component({
  selector: 'bottom-sheet-overview-example-sheet',
  template: `<span class="text-color">
  Thanks
</span>
`,
  styles: [`
    .text-color {
      color: hotpink;
    }
  `],
})
export class purchaseConfirm { }