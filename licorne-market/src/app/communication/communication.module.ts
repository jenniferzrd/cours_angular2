import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {MatButtonModule,MatMenuModule,MatGridListModule,MatSnackBarModule} from '@angular/material';

import { ShopComponent } from '../shop/shop.component';
import { SnackBarComponent } from '../snack-bar/snack-bar.component';
import { BasketComponent } from '../basket/basket.component';
import { HeaderComponent } from '../header/header.component';


@NgModule({
  imports: [
    CommonModule,
    BrowserAnimationsModule,
    MatGridListModule,
    MatSnackBarModule,
    MatButtonModule,
    MatMenuModule
  ],
  declarations: [
    ShopComponent,
    SnackBarComponent,
    BasketComponent,
    HeaderComponent
  ],
  exports: [
    ShopComponent,
    SnackBarComponent,
    BasketComponent,
    HeaderComponent
  ]
})
export class CommunicationModule { }
