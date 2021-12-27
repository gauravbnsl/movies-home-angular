import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { catchError } from 'rxjs/operators';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class MovieService {
  private newMovie$: BehaviorSubject<any> = new BehaviorSubject(null);
  private recentMovies$: BehaviorSubject<any> = new BehaviorSubject(null);

  recentlyViewed = [] as any;
  searchResult = [
    {
      Title: 'Endgame',
      Year: '2011',
      Rated: 'N/A',
      Released: '14 Mar 2011',
      Runtime: '60 min',
      Genre: 'Crime, Drama',
      Director: 'N/A',
      Writer: 'Avrum Jacobson',
      Actors: 'Shawn Doyle, Patrick Gallagher, Katharine Isabelle',
      Plot: 'Endgame is an original drama series centering on brilliant chess master, Arkady Balagan. Traumatized by the murder of his fiancée, Balagan has become a prisoner in his luxury Vancouver hotel, terrified to step outside. To pay his bil',
      Language: 'English',
      Country: 'Canada',
      Awards: '1 win & 5 nominations',
      Poster:
        'https://m.media-amazon.com/images/M/MV5BMTM0NzUwNjk5MF5BMl5BanBnXkFtZTcwOTk3NDM4NA@@._V1_SX300.jpg',
      Ratings: [{ Source: 'Internet Movie Database', Value: '7.6/10' }],
      Metascore: 'N/A',
      imdbRating: '7.6',
      imdbVotes: '3,536',
      imdbID: 'tt1797629',
      Type: 'series',
      totalSeasons: '1',
      Response: 'True',
    },
    {
      Title: 'Hangover',
      Year: '2018',
      Rated: 'N/A',
      Released: 'N/A',
      Runtime: 'N/A',
      Genre: 'Action',
      Director: 'Vittal Bhatt',
      Writer: 'N/A',
      Actors: 'Raj',
      Plot: '',
      Language: 'Kannada',
      Country: 'India',
      Awards: 'N/A',
      Poster:
        'https://m.media-amazon.com/images/M/MV5BZmVlZGUxMzMtZTYwMi00OGJjLTg5OTgtZjFlMGIwMWRjYTVkXkEyXkFqcGdeQXVyNjY0OTkzMjk@._V1_SX300.jpg',
      Ratings: [{ Source: 'Internet Movie Database', Value: '7.1/10' }],
      Metascore: 'N/A',
      imdbRating: '7.1',
      imdbVotes: '457',
      imdbID: 'tt9179248',
      Type: 'movie',
      DVD: 'N/A',
      BoxOffice: 'N/A',
      Production: 'N/A',
      Website: 'N/A',
      Response: 'True',
    },
  ];

  constructor(private http: HttpClient) {}

  getNewMovie() {
    return this.newMovie$.asObservable();
  }

  getRecentViewedList() {
    return this.recentMovies$.asObservable();
  }

  markMovieAsWatched(item: any) {
    this.searchResult = this.searchResult.filter(
      (movie) => movie.imdbID !== item.imdbID
    );
    this.recentlyViewed.push(item);
    this.recentMovies$.next(this.recentlyViewed);
    this.newMovie$.next(this.searchResult);
  }

  searchMovies(name: string) {
    this.newMovie$.next(this.searchResult);
    let url = `http://www.omdbapi.com/?t=${name}`;
    return this.http.get<any>(url).pipe(
      catchError((error) => {
        console.log(error);
        return error;
      })
    );
  }
}
