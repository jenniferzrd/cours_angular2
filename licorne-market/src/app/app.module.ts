import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {MatButtonModule,MatMenuModule,MatGridListModule,MatSnackBarModule} from '@angular/material';

import { CommunicationModule } from './communication/communication.module';

import { AppComponent } from './app.component';
import { ShopComponent } from './shop/shop.component';
// import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
// import { BasketComponent } from './basket/basket.component';
import { SessionService } from './session.service'


@NgModule({
  declarations: [
    AppComponent,
    // HeaderComponent,
    FooterComponent
    // BasketComponent,
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MatButtonModule,
    MatMenuModule,
    CommunicationModule,
    MatGridListModule,
    MatSnackBarModule
  ],
  providers: [SessionService],
  bootstrap: [AppComponent]
})
export class AppModule { }
