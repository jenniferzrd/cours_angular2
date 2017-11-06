import { Component, OnInit, Input } from '@angular/core';


/*export class Item {*/

// je défini le type d'un objet item, grace a une interface, un moule, item

/*  price: number;
  name: string;
  img: string;
  couleur: string;
  size: string;
}*/


interface Item {
  size: string;
  couleur: string;
  price: number;
  name: string;
  img: string;
}

// Je declare un tableau avec tout mes objets item(minuscule),

const ITEMS = [
  {price: 20, name: 'Manche longue dentelle', img:'../assets/images/tshirt01.jpg', couleur: 'noir', size:'m'},
  {price: 30, name: 'Champagne', img:'../assets/images/tshirt02.jpg', couleur: 'vert', size:'l'},
  {price: 40, name: 'Flower', img:'../assets/images/tshirt03.jpg', couleur: 'noir', size:'s'},
  {price: 40, name: 'Ligné', img:'../assets/images/tshirt04.jpg', couleur: 'noir', size:'m'},
  {price: 30, name: 'Cutie red', img:'../assets/images/tshirt05.jpg', couleur: 'rouge', size:'s'},
  {price: 35, name: 'Orange', img:'../assets/images/tshirt06.jpg', couleur: 'orange', size:'l'},
];

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.css']
})
export class ChildComponent implements OnInit {


/*Je déclare Input, module mise a dispo par angular*/
 
// Je declare un element de ma class childcomponent cet element peut etre affiche dans du html
// cet element a comme type => tableau [d'obj de type item]
items = ITEMS;

// je créée une variable qui va pouvoir contenir une valeur sur laquelle je test mon filtre
@Input() filterSize : string; // je dis maintenant que filterSize est un input en lui collant devant @INPUT

  constructor() { }

  ngOnInit() {
  	this.items = ITEMS; // fait référence à items = ITEMS;
  	// Je mets this devant car l'élément est a l'interieur de la methode de cette classe
  	/*this.filterSize = 'S';*/ //<- comme filterSize est maintenant un Input, je ne définis plus sa valeur dans child
  	/*car maintenant il vaut le selectedSize*/
  }

}