import { Component } from '@angular/core';

@Component({
  selector: 'app-first',
  templateUrl: './app.premier.html',
  // styleUrls: ['./app.monpremiercomponent.css']
})
export class AppPremier {
  title = 'app';
  user = 'jenny dans le fichier premier.ts';
  numbers = [1, 2, 3, 4];
}
