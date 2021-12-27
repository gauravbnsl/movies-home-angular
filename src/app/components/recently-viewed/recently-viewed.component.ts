import { Component, OnInit } from '@angular/core';
import { MovieService } from 'src/app/services/movie.service';

@Component({
  selector: 'app-recently-viewed',
  templateUrl: './recently-viewed.component.html',
  styleUrls: ['./recently-viewed.component.scss'],
})
export class RecentlyViewedComponent implements OnInit {
  searchResult: any;
  constructor(private movieService: MovieService) {}

  ngOnInit(): void {
    this.movieService
      .getRecentViewedList()
      .subscribe((movieList) => (this.searchResult = movieList));
  }
}
