import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';

// SERVICES

import { HpService } from './hp/hp.service'

// COMPONENTS

import { AppComponent } from './app.component';
import { GridComponent } from './grid/grid.component';

@NgModule({
  declarations: [
    AppComponent,
    GridComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule
  ],
  providers: [HpService],
  bootstrap: [AppComponent]
})
export class AppModule { }
