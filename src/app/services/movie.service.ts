import { Injectable } from '@angular/core';
import Movie from '../models/Movie';

@Injectable({
  providedIn: 'root',
})

//se crea este servicio para poder agregar peliculas a la lista de peliculas
export class MovieService {
  movies: Movie[];

  constructor() {
    this.movies = [];
  }
  //metodo que permite agregar las peliculas a la lista de peliculas
  addMovie(movie: Movie): void {
    this.movies.push(movie);
  }
}
