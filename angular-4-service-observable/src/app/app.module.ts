import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';

// COMPONENTS
import { AppComponent } from './app.component';
import { GridComponent } from './grid/grid.component';

// SERVICE
import { HpService } from './hp/hp.service';
import { FavoriteService } from './favorite/favorite.service';
import { FavoriteComponent } from './favorite/favorite.component';


@NgModule({
  declarations: [
    AppComponent,
    GridComponent,
    FavoriteComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule
  ],
  providers: [
    HpService,
    FavoriteService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
