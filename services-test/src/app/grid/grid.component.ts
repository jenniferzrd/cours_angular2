import { Component, OnInit } from '@angular/core';
// SERVICES
/*j'importe ici mon custom*/
import { HpService } from '../hp/hp.service';
import { Character } from '../characters/character';

@Component({
  selector: 'app-grid',
  templateUrl: './grid.component.html',
  styleUrls: ['./grid.component.css']
})
export class GridComponent implements OnInit {

/*j'initialise une variable :
*/

 	characters : Character[];
  favorites: Character [];

  constructor(private hp: HpService) { 

  	this.characters = [];

  }

  ngOnInit() {
/*  	console.log(this.hp.fakeData);*/
/*  	this.characters = this.hp.fakeData;*/
 /* 	this.hp.characters.subscribe( (c: any) => {*/
/*  		c sera la nouvelle valeur renvoyée */  
/*	this.characters = c;	
*/ 	this.hp.characters.subscribe( (c: Character[]) => {
		this.characters = c;	

});
/*  	(jappelle mon observable de mon service)*/  

}

favorite(character) {
  this.hp.addToFavorites(character);
	// console.log("test");
};

}

// dans le constructor on appelle notre service directement, on souhaite que cette variable soit protégé et pas accessible a tous
// on accèdera au tableau grace a this.hp.fakeData