import { Component, OnInit } from '@angular/core';

export class Item {

  price: number;
  name: string;
  img: string;
  couleur: string;
}

@Component({
  selector: 'app-parent',
  templateUrl: './parent.component.html',
  styleUrls: ['./parent.component.scss']
})


export class ParentComponent implements OnInit {

	
selectedValue: string;

sizes = [
    {value: 'S', viewValue: 'S'},
    {value: 'M', viewValue: 'M'},
    {value: 'L', viewValue: 'L'}
  ];

prices = [
    {value: '40', viewValue: '40'},
    {value: '30', viewValue: '30'},
    {value: '20', viewValue: '20'}
  ];

colors = [
    {value: 'Black', viewValue: 'Black'},
    {value: 'Red', viewValue: 'Red'},
    {value: 'Orange', viewValue: 'Orange'},
    {value: 'Green', viewValue: 'Green'}
  ];

/*  open() {
	console.log("test");
}*/

selectedSize: string; 
// doit être de la même valeur que la filterSize

constructor() {}

  ngOnInit() {
  	this.selectedSize = 'M';

  }

}