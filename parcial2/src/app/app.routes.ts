import { Routes } from '@angular/router';
import { CvPage } from './pages/cv-page/cv-page';
import { AprendizajePage } from './pages/aprendizaje-page/aprendizaje-page';
import { LibrosPage } from './pages/libros-page/libros-page';

export const routes: Routes = [
  { path: '', redirectTo: 'hoja-de-vida', pathMatch: 'full' },
  { path: 'hoja-de-vida', component: CvPage },
  { path: 'aprendizaje', component: AprendizajePage },
  { path: 'libros', component: LibrosPage },
  { path: '**', redirectTo: 'hoja-de-vida' }
];