import { Component } from '@angular/core';
import { HeaderComponent } from '../header/header.component';
import { ActivatedRoute } from '@angular/router';
import { MovieService } from '../../services/movie.service';
import Movie from '../../models/Movie';

@Component({
  selector: 'app-movie-details',
  imports: [HeaderComponent],
  templateUrl: './movie-details.component.html',
  styleUrl: './movie-details.component.css',
})
export class MovieDetailsComponent {
  selectMovie?: Movie;
  //activatedRoute nos permite acceder a todos los parametros que se pasan por la url
  constructor(
    private route: ActivatedRoute,
    private MovieService: MovieService
  ) {
    //obtiene el parametro de la url o ruta
    const movieName = route.snapshot.params['movieName'];
    console.log(movieName);
    this.selectMovie = MovieService.getMovie(movieName);
  }
}
