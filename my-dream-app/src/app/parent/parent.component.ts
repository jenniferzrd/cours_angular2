import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-parent',
  templateUrl: './parent.component.html',
  styleUrls: ['./parent.component.scss']
})
export class ParentComponent implements OnInit {

	greeting: string;

  constructor() { }

  ngOnInit() {
  	this.greeting = "hello";
  }

  parentReceive (event) {
  	this.greeting = event;
  }

}
