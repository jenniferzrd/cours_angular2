import { Routes } from '@angular/router';
import { AboutComponent } from './about/about.component';
import { PostsComponent } from './posts/posts.component';
import { ErrorComponent } from './error/error.component'

export const routes: Routes = [
    { path: '', redirectTo: '/about', pathMatch: 'full'},
    { path: 'about', component: AboutComponent },
    { path: 'posts', component: PostsComponent },
    // ici on lui dit que de base il ira sur about
    // on veut un certain selecteur pour notre redirection
    // on utilisera notre router outlet
    // prefix repond a nimporte quelle url qui commence par la lettre du path défini
    { path: '**', component: ErrorComponent },
];



