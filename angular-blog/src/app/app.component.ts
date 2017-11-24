import { Component } from '@angular/core';

@Component({
  moduleId: module.id,
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
//   template: `
//   <div class="menu">
//   <a [routerLink]="['/']">Home</a>
//   <a [routerLink]="['/about']">About</a>
//   <a [routerLink]="['/posts']">Posts</a>
//   <div class="outer-outlet">
//     <router-outlet></router-outlet>
//   </div>
//   </div>
//  `,
})
export class AppComponent {
  title = 'app';
}