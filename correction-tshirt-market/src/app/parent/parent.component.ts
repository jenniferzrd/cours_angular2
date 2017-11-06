import { Component, OnInit } from '@angular/core';


export class Item {

  price: number;
  name: string;
  img: string;
  couleur: string;
  size: string;
}

@Component({
  selector: 'app-parent',
  templateUrl: './parent.component.html',
  styleUrls: ['./parent.component.css']
})
export class ParentComponent implements OnInit {

selectedSize: string; // doit être de la même valeur que la filterSize

  ngOnInit() {
  	this.selectedSize = 'm';
  }

}
