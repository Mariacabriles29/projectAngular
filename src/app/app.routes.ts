import { Routes } from '@angular/router';

import { HomeComponent } from './pages/home/home.component';
import { MovieListComponent } from './pages/movie-list/movie-list.component';
import { FormPageComponent } from './pages/form-page/form-page.component';
import { MovieDetailsComponent } from './components/movie-details/movie-details.component';

export const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'movies', component: MovieListComponent },
  { path: 'create', component: FormPageComponent },
  //esta es una ruta parametrizada que recibe el nombre de la pelicula
  { path: 'movies/:movieName', component: MovieDetailsComponent },
];
