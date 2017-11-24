import { Component, OnInit } from '@angular/core';
import {NgModel} from '@angular/forms';
import { GrannyService } from '../granny.service';
import {Granny} from '../granny';

@Component({
  selector: 'app-grid',
  templateUrl: './grid.component.html',
  styleUrls: ['./grid.component.css']
})
export class GridComponent implements OnInit {

  // name: String = 'Paulette';
  // description: String = 'Jaime tricoter des pulls';
  // picture: String = 'http://www.jokesoftheday.net/jokes-archive/2016/02/09/Grandma-21.jpg';

  name: String;
  description: String;
  picture: String;
  grannys: Granny[] // tableau de type granny
  granny: any;

 // cela sera une instance du service granny, a travers mon component je vais pouvoir utiliser 
 // les différentes fonctions mis a disposition par mon service
  constructor(private gs: GrannyService) {
    this.grannys = [];
   }

  ngOnInit() {
    
    this.name= 'Paulette';
    this.description= 'Jaime tricoter des pulls';
    this.picture= 'http://www.jokesoftheday.net/jokes-archive/2016/02/09/Grandma-21.jpg';
// je souscris aux arrivés de données, je vais les observer car c'est un observable
    this.gs.grannys.subscribe( (g: Granny []) =>{
      this.grannys = g;
    });
  }

  onSubmit() {
    console.log("hello");
    this.granny = {
      name: this.name,
      description: this.description,
      picture: this.picture
    }

    this.gs.saveGranny(this.granny);
  }
}
