import { Injectable } from '@angular/core';
import Movie from '../models/Movie';

@Injectable({
  providedIn: 'root',
})

//se crea este servicio para poder agregar peliculas a la lista de peliculas
export class MovieService {
  movies: Movie[];

  constructor() {
    this.movies = [
      { name: 'Inception', duration: 300, director: 'Christopher Nolan' },
      {
        name: 'El señor de los anillos',
        duration: 200,
        director: 'Peter Jackson',
      },
    ];
  }
  //metodo que permite agregar las peliculas a la lista de peliculas
  addMovie(movie: Movie): void {
    this.movies.push(movie);
  }

  //metodo para encontrar la pelicula a traves de su nombre

  getMovie(name: string): Movie | undefined {
    return this.movies.find((movie) => movie.name === name);
  }
}
