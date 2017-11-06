import { Component, OnInit } from '@angular/core';

export class Item {
    price: number;
    name: string;
}


const ITEMS: Item [] = [

{price: 20, name:'sac'},
{price: 90, name:'bottes'},
{price: 130, name:'manteau'},
{price: 5, name:'chaussette'},
{price: 50, name:'lunettes'},
{price: 40, name:'pull'},
{price: 10, name:'tshirt'},
{price: 60, name:'pantalon'}

]

@Component({
  selector: 'app-shop',
  templateUrl: './shop.component.html',
  styleUrls: ['./shop.component.scss']
})



/*Cela revient à faire en vanilla :*/

/*class Item (price, itemName) {

this.price = price;
this.itemName = itemName;
sac = new Item(20, 'sac');
}
*/

export class ShopComponent {

/*item : Item = {
    price: 20,
    name: 'sac'
}*/

items = ITEMS

selectedItem : Item;

onSelect (item: Item) : void {
    console.log(item.name)
    this.selectedItem = item;
}

}
