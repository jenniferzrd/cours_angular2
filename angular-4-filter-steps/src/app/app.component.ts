import { Component } from '@angular/core';

// Organiser les etapes par ordre de facilite @ child

// A / ARCHITECTURE
// STEP 1 -> Parent soit affiche dans mon app @ parent
// STEP 2 -> Child soit affiche dans parent @ child

// B / CREER / RECUPERER la donnees @ child
// STEP 1 -> Créer le moule/typage
// STEP 2 -> Remplir le moule

// C / AFFICHER LA DONNE @ child
// STEP 1 -> faire un test d'affichage simple !!!!!!!!!!!!!!!!!!!!
// Toujours penser a se faire des petites etapes/milestones pour tester au fiur et a mesure
// STEP 2 -> Boucler dans mon tableau
// Continuer le test de boucle sur un element simple et unique

// D / FILTRER LA DONNE @ child
// STEP 1 -> le faire avec une valeur simple en dur
// STEP 2 -> le faire avec une valeur qu'on a bindé via le component

// E / PASSER CE FILTRE DU PARENT VERS L'ENFANT @ child && parent
// STEP 1 -> definir une valeur simple dans le parent 
// STEP 2 -> lier selectedSize a filterSize

// F / Faire un menu de selection qui defini selectedSize @ parent
// STEP 1 Faire un menu de selection
// STEP 2 lier a selectedSize


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';
}
