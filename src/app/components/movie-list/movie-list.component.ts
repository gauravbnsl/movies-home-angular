import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { MovieService } from 'src/app/services/movie.service';

@Component({
  selector: 'app-movie-list',
  templateUrl: './movie-list.component.html',
  styleUrls: ['./movie-list.component.scss'],
})
export class MovieListComponent implements OnInit {
  searchResult: any;
  movie = new FormControl('');

  constructor(private movieService: MovieService) {}

  ngOnInit(): void {
    this.movieService
      .getNewMovie()
      .subscribe((movieList) => (this.searchResult = movieList));
  }

  onMovieCheck(item: any) {
    this.movieService.markMovieAsWatched(item);
  }
}
