import {Component, Input, Output, EventEmitter} from '@angular/core';
import {MatSnackBar} from '@angular/material';
import { ShopComponent } from '../shop/shop.component';
import { SessionService } from '../session.service';

export class Item {

  price: number;
  name: string;
  img: string;
  quantite?: number;
}

@Component({
  selector: 'snack-bar',
  templateUrl: 'snack-bar.component.html',
})


export class SnackBarComponent {
  @Input() productName: Item;
  // @Output() signalSnack = new EventEmitter<string> ();

  constructor(public snackBar: MatSnackBar, private sessionService: SessionService) {}

  openSnackBar(productName: Item) {


    console.log("snackbarcomponent");
    this.snackBar.open(productName.name + " a été ajouté au panier", null, {
      duration: 1000,
    });

    this.sessionService.addToCart(productName);

  }
}
