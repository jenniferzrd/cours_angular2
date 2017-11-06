import { Component, OnInit } from '@angular/core';

// SERVICE -> j'importe ici mon custom service
import { HpService } from '../hp/hp.service';
import { FavoriteService } from '../favorite/favorite.service';

// IMPORT INTERFACE
import { Character } from '../character/character'

@Component({
  selector: 'app-grid',
  templateUrl: './grid.component.html',
  styleUrls: ['./grid.component.css']
})

export class GridComponent implements OnInit {

  characters: Character[];

  constructor(private hp: HpService,private fav: FavoriteService) {
    this.characters = [];
  }

  ngOnInit() {
    this.hp.characters.subscribe( (c: Character[]) => {
      this.characters = c;
    })
  }

  addToFavorite (character) {
    this.fav.addCharacter(character);
    //console.log('Is added' + character.name);
    // this.hp.changeCharacter(character);
  }

}
