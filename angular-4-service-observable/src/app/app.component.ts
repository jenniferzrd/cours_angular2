import { Component } from '@angular/core';

// ETAPE 1
// cree mon service avec de la fake data
// je le lie a mon fgrid component
// je verifie que je l'importe bien dans mon component
// et dans la partie providers de module
// Je verifie de bien avoir appele mon component dans mon appmodule
// Je verifie que j'arrive a injecte fakeData de service dans mon component

// ETAPE 2
// Reussir a incorporer des requetes http dans mon service


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';
}
