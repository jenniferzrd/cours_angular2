import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { ParentComponent } from './parent/parent.component';
import { ChildComponent } from './child/child.component';
/*import { CommunicationModule } from './communication/communication.module';
*/import { AppComponent } from './app.component';

@NgModule({
  declarations: [
    AppComponent,
    ParentComponent, 
    ChildComponent
  ],
  imports: [
    BrowserModule,
/*     CommunicationModule*/
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
