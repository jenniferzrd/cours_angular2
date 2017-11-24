import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {FormsModule} from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
// import du service qu'on importera dans providers
import { GrannyService } from '../granny.service';
import { GridComponent } from '../grid/grid.component';


@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    HttpClientModule
  ],
  declarations: [
    GridComponent
  ],
  exports: [
    GridComponent
  ],
  providers: [ GrannyService]
})
export class BodyModule { }

// quand je construis un nouveau module qui aura des components dedans, quand je l'importe
// il doit venir avec ses components donc je l'exporte