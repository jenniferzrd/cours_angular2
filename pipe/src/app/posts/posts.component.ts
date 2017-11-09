import { Component, OnInit } from '@angular/core';

interface Chickens {
  name: string;
  hobby: string;
}

const CHICKENS : Chickens[] = [
{name: 'stephanie', hobby: 'monaco'},
{name: 'jeanpol', hobby: 'la pétanque'}
]

@Component({
  selector: 'app-posts',
  templateUrl: './posts.component.html',
  styleUrls: ['./posts.component.css']
})
export class PostsComponent implements OnInit {

  chickens: Chickens[];
  search: string;

  constructor() {
    this.search = '';
    this.chickens = CHICKENS;

   }

  ngOnInit() {
  }

}
