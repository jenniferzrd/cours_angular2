import { Component, OnInit } from '@angular/core';

interface Posts {
  title: string;
  desc : string;
  }
  
const POSTS : Posts[] = [
  
    { title: 'lulu', desc: 'a un gros cul'},
    { title: 'lala', desc: 'est un gros tas'},
  ]

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  // title = 'app';

  posts: Posts[];  

  ngOnInit() {
  this.posts = POSTS;
  }
}
