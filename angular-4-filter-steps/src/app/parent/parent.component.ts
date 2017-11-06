// A / 1 -> Je cree mon componnet parent
// $ ng g component parent
// Je le rajoute dans app.component.html

import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-parent',
  templateUrl: './parent.component.html',
  styleUrls: ['./parent.component.css']
})

export class ParentComponent implements OnInit {

  // E / 1 Je defini une valeur qui pourra recuperer le filtre selectionne
  selectedSize: string;

  constructor() { }

  ngOnInit() {
    // Je n'ai plus besoin de definir selectedSize
    // Sa valeur est defini par ngModel dans mon template
    // E / 1 -> this.selectedSize = 's';
  }

}
