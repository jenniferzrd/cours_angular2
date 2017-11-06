import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { CommunicationModule } from './communication/communication.module';
import { AppPremier } from './app.premier';
import { AppComponent } from './app.component';
import { TestViaCommandeComponent } from './test-via-commande/test-via-commande.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import {MatButtonModule, MatCheckboxModule} from '@angular/material';
import { ShopComponent } from './shop/shop.component';
import { OutputComponent } from './output/output.component';


@NgModule({
  declarations: [
   AppComponent,
   OutputComponent
   // AppPremier,
  // TestViaCommandeComponent
/*  ShopComponent*/],
  imports: [
    BrowserModule,
    CommunicationModule
    //BrowserAnimationsModule,
    //MatButtonModule,
    //MatCheckboxModule
  ],
  providers: [],
  bootstrap: [
  AppComponent
/*  AppPremier*/
/*  ShopComponent*/
  ],
  // exports: [
  //   MatButtonModule,
  //   MatCheckboxModule
  // ]
})
export class AppModule { }
