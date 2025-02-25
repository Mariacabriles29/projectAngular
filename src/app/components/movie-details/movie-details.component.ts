import { Component, OnInit } from '@angular/core';
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
//se usa el OnInit para manjera la loggica del componente
export class MovieDetailsComponent implements OnInit {
  selectMovie?: Movie;
  //activatedRoute nos permite acceder a todos los parametros que se pasan por la url
  constructor(
    private route: ActivatedRoute,
    private movieService: MovieService
  ) {}

  ngOnInit(): void {
    const movieName = this.route.snapshot.params['movieName'];
    console.log(movieName);
    this.selectMovie = this.movieService.getMovie(movieName);
  }
}
