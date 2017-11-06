import { Component } from '@angular/core';

// ETAPE 1
// 1 je créé mon service avec de la fakedata
// 2 je le lie avec grid de mon component
// je vérifie que je l'importe bien dans mon component
// et dans la partie providers du module
// je vérifie de bien avoir appelé mon component
// je vérifie que j'arrive a injecter fake data de service dans le component

// ETAPE 2

// réussir a incorporer des requettes http dans mon service

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';
}
