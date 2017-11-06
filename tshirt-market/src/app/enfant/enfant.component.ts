import { Component, Input, OnInit } from '@angular/core';


export class Item {

// je défini le type d'un objet item, grace a une interface, un moule, item

  price: number;
  name: string;
  img: string;
  couleur: string;
  size: string;
}

const ITEMS : Item[] = [
  {price: 20, name: 'Manche longue dentelle', img:'../assets/images/tshirt01.jpg', couleur: 'noir', size:'M'},
  {price: 30, name: 'Champagne', img:'../assets/images/tshirt02.jpg', couleur: 'vert', size:'L'},
  {price: 40, name: 'Flower', img:'../assets/images/tshirt03.jpg', couleur: 'noir', size:'S'},
  {price: 40, name: 'Ligné', img:'../assets/images/tshirt04.jpg', couleur: 'noir', size:'M'},
  {price: 30, name: 'Cutie red', img:'../assets/images/tshirt05.jpg', couleur: 'rouge', size:'S'},
  {price: 35, name: 'Orange', img:'../assets/images/tshirt06.jpg', couleur: 'orange', size:'L'},
]


@Component({
  selector: 'app-enfant',
  templateUrl: './enfant.component.html',
  styleUrls: ['./enfant.component.scss']
})
export class EnfantComponent implements OnInit {

 @Input() productSize: string;
 @Input() productPrice: number;
 @Input() productColor: string;


/*Je déclare Input, module mise a dispo par angular*/
 
// Je declare un element de ma class childcomponent cet element peut etre affiche dans du html
// cet element a comme type => tableau [d'obj de type item]
items = ITEMS;

// je créée une variable qui va pouvoir contenir une valeur sur laquelle je test mon filtre
@Input() filterSize : string; 
// je dis maintenant que filterSize est un input en lui collant devant @INPUT

constructor() {}


  ngOnInit() {
  	/*this.items = ITEMS; 
*/  	// fait référence à items = ITEMS;
  	// Je mets this devant car l'élément est a l'interieur de la methode de cette classe
  	/*this.filterSize = 'S';*/ //<- comme filterSize est maintenant un Input, je ne définis plus sa valeur dans child
  	/*car maintenant il vaut le selectedSize*/
  }


}
