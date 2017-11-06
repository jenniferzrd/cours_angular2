import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
  // templateUrl: './app.monpremiercomponent.html',
  // styleUrls: ['./app.monpremiercomponent.css']
})
export class AppComponent {
  // title = 'app';

  parentGreeting: string;
  
  constructor () {
    this.parentGreeting = 'Hello';
    }
    
    receiveSignal(name) {
      this.parentGreeting = name; 
  }

}
