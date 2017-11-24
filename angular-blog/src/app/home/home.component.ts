import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'about-home',
  template: `<h3>About Home</h3>`
})

export class AboutHomeComponent { }
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
//   template: `
//   <h2>Home</h2>
//   <a [routerLink]="['/about']">About</a>
//   <a [routerLink]="['/posts']">Posts</a>
//   <div class="inner-outlet">
//     <router-outlet></router-outlet>
//   </div>
// `
})
export class HomeComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
