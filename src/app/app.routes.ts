import { Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { MovieListComponent } from './pages/movie-list/movie-list.component';
import { MovieFormPageComponent } from './pages/movie-form-page/movie-form-page.component';

//aqui voy a agregar las rutas de mi aplicacion

export const routes: Routes = [
  { path: '', component: HomeComponent },
  {
    path: 'movies',
    component: MovieListComponent,
  },
  { path: 'create', component: MovieFormPageComponent },
];
