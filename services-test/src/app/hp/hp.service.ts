	import { Injectable } from '@angular/core';
	import { HttpClient } from '@angular/common/http';
	import { Subject } from 'rxjs/Subject';
	import { Observable } from 'rxjs/Observable';


	// CUSTOM INTERFACE

	import { Character } from '../characters/character';

	/*const FAKE: string[] = [
	"yo",
	"ya",
	"yu",
	"yi"
	]; */

	// on veut injecter ça n'importe où dans mon module app

	const URL = 'http://hp-api.herokuapp.com/api/characters';

	@Injectable()

	export class HpService {
	
		

/*	private characterSubject = new Subject<any> ();*/
	/*le typage de l'argument de subject
	*/	

	/*characters : Observable<any>;*/

		private characterSubject = new Subject<Character[]> ();
		characters : Observable<Character[]>;
		imageCharacters : Character[];
		favorites: Character[];

/*	fakeData : any;*/

	  constructor(private http: HttpClient) {
		this.favorites = [];
	  this.characters = this.characterSubject.asObservable(); 

/*	  	this.fakeData = FAKE;
*/	  	/*this.http.get(URL).subscribe(data => {*/
	  	/*	console.log(data);*/

	  	this.http.get<Character[]>(URL).subscribe(data => {
	  		this.characterSubject.next(data);
	  		  	/*this.fakeData = data;*/ // s'exécute qu'une fois que dans grid.ts le code soit fini
	  	})
	  /*	console.log('yo');*/
	}

	  	changeCharacters(characters) {
/*	Permet de push dans une image de character*/	
		this.imageCharacters.push(characters);
		this.characterSubject.next(this.imageCharacters);
	}


		  addToFavorites(favorite: Character) {
		// console.log("hello");
		this.favorites.push(favorite);
	  }

	getCart () :Character[] {
		return this.favorites;
	  }

	}

	/*dans constructor c'est ce qui va construire le service
	le ng oninit va appeller une instance de chaque service*/

	/*Un observable va regarder et voir où la donnée change/modifié pour nous la donner*/

