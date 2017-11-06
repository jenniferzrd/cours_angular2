// A / 2 -> Je cree mon component child
// $ ng g component child
// Je le rajoute dans parent.component.html

// J'importe Input de Angular Core, c'est un module mis a dispo par angular4
import { Component, OnInit, Input } from '@angular/core';

// B / 1 Defini le type d'un objet item(minuscule),
// B / 1 grace a une interface/moule Item(majuscule)
interface Item {
  size: string;
  color: string;
  price: number;
}

// B / 2 Je declare un tableau avec tout mes objets item(minuscule),
const ITEMS = [
  {size: 's', color: 'black', price: 10},
  {size: 'm', color: 'green', price: 20},
  {size: 'm', color: 'black', price: 10},
  {size: 'l', color: 'black', price: 20},
  {size: 's', color: 'blue', price: 20},
  {size: 'm', color: 'green', price: 30},
  {size: 's', color: 'blue', price: 10},
  {size: 'l', color: 'black', price: 30},
  {size: 'm', color: 'green', price: 30}
];

// NE jamais séparer app componnet de l'export de la class
// Garder cette declaration a la fin du fichier
@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.css']
})
export class ChildComponent implements OnInit {


  // Je declare un element de la ma class ChildComponent
  // Cet element peut etre affiche dans du HTML
  // cet element a comme type -> tableau [d'objet de type Item]
  items: Item[];
  // Je cree une variable qui va pouvoir contenir une valeur
  // sur laquelle je teste mon filtre
  // E / 2 Je rajoute la methode input devant filterSize
  @Input() filterSize: string;

  constructor() { }

  ngOnInit() {
    // C / 1 this.items fait reference a l'element items que j'ai declare plus haut
    // C / 1 Je met this devant car a l'interieure d'une methode de ma class
    this.items = ITEMS;
    // Comme filterSize est maintenant un input
    // je ne defini plus sa valeur dans child
    // this.filterSize = 'm'
    // elle seta defini automatiquement par 
    // La variable selectedSize du parent
  }

}
