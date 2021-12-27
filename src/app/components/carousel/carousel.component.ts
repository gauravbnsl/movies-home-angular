import { Component, OnInit } from '@angular/core';
import {
  trigger,
  state,
  style,
  animate,
  transition,
  // ...
} from '@angular/animations';

@Component({
  selector: 'app-carousel',
  templateUrl: './carousel.component.html',
  styleUrls: ['./carousel.component.scss'],
  animations: [
    trigger('slideInOut', [
      transition(':enter', [
        style({ transform: 'translateX(100%)' }),
        animate('600ms ease-in', style({ transform: 'translateX(0%)' })),
      ]),
      transition(':leave', [
        animate('100ms ease-out', style({ transform: 'translateX(-100%)' })),
      ]),
    ]),
  ],
})
export class CarouselComponent implements OnInit {
  activeIndex = 0;
  isOpen = false;
  searchResult = [
    {
      Title: 'Endgame',
      Year: '2011',
      Rated: 'N/A',
      Released: '14 Mar 2009',
      Runtime: '60 min',
      Genre: 'Crime, Drama',
      Director: 'N/A',
      Writer: 'Avrum Jacobson',
      Actors: 'Shawn Doyle, Patrick Gallagher, Katharine Isabelle',
      Plot: 'Endgame is an original drama series centering on brilliant chess master, Arkady Balagan. Traumatized by the murder of his fiancée, Balagan has become a prisoner in his luxury Vancouver hotel, terrified to step outside. To pay his bill, Balagan starts solving mysteries - using an unlikely band of hotel employees and chess fanatics to do his legwork. Arrogant, brilliant and charismatic, the Russian-born Balagan uses the skills that made him chess champion of the world to solve the crimes that mystify others. He imagines events, interviews the living and the dead, and runs conflicting scenarios - all in his head. And we get to watch right along with him as he solves crimes that baffle the police. In Endgame, we see genius at work',
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
      Title: 'Dont Look Up',
      Year: '2009',
      Rated: 'R',
      Released: '08 Jan 2011',
      Runtime: '85 min',
      Genre: 'Horror',
      Director: 'Fruit Chan',
      Writer: 'Brian Cox, Hiroshi Takahashi, Hideo Nakata',
      Actors: 'Rachael Murphy, Eli Roth, Ben DiGregorio',
      Plot: 'In the Dark Ages, a gypsy woman made a pact with Beng, the gypsy devil, to marry a powerful man. In return, Beng asked for her first born child. Her daughter Matya had the mark of the devil and was killed by the villagers. In 1928, the Hungarian director Bela Olt decides to shoot Matyas story with the lead gypsy actress Lila Kis. However, the director, the cast and the crew vanished with the film that had never been seen. Back to the present and the discredited medium director Marcus Reed and his producer Josh Petri head to Romania to make a film about Matyas story...',
      Language: 'English, Romanian',
      Country: 'United States, Japan, South Africa',
      Awards: 'N/A',
      Poster:
        'https://m.media-amazon.com/images/M/MV5BMjE1NTYwNTAyOV5BMl5BanBnXkFtZTcwNTA3NDY0Mw@@._V1_SX300.jpg',
      Ratings: [{ Source: 'Internet Movie Database', Value: '3.1/10' }],
      Metascore: 'N/A',
      imdbRating: '3.1',
      imdbVotes: '1,579',
      imdbID: 'tt1034305',
      Type: 'movie',
      DVD: 'N/A',
      BoxOffice: 'N/A',
      Production: 'N/A',
      Website: 'N/A',
      Response: 'True',
    },
    {
      Title: 'Suits',
      Year: '2011–2019',
      Rated: 'TV-14',
      Released: '23 Jun 2012',
      Runtime: '44 min',
      Genre: 'Comedy, Drama',
      Director: 'N/A',
      Writer: 'Aaron Korsh',
      Actors: 'Gabriel Macht, Patrick J. Adams, Meghan Markle',
      Plot: "While running from a drug deal gone bad, brilliant young college-dropout Mike Ross slips into a job interview with one of New York City's best legal closers, Harvey Specter. Tired of cookie-cutter law school grads, Harvey takes a gamble by hiring Mike on the spot after recognizing his raw talent and photographic memory. Mike and Harvey are a winning team. Although Mike is a genius, he still has a lot to learn about the law; and while Harvey might seem like an emotionless, cold-blooded shark, Mike's sympathy and concern for their cases and clients will help remind Harvey why he went into law in the first place. Mike's other allies in the office include the firm's best paralegal Rachel and Harvey's no-nonsense assistant Donna. Proving to be an irrepressible duo and invaluable to the practice, Mike and Harvey must keep their secret from everyone including managing partner Jessica and Harvey's arch nemesis Louis, who seems intent on making Mike's life as difficult as possible.",
      Language: 'English',
      Country: 'United States',
      Awards: '1 win & 9 nominations',
      Poster:
        'https://m.media-amazon.com/images/M/MV5BNmVmMmM5ZmItZDg0OC00NTFiLWIxNzctZjNmYTY5OTU3ZWU3XkEyXkFqcGdeQXVyMTQxNzMzNDI@._V1_SX300.jpg',
      Ratings: [{ Source: 'Internet Movie Database', Value: '8.4/10' }],
      Metascore: 'N/A',
      imdbRating: '8.4',
      imdbVotes: '384,845',
      imdbID: 'tt1632701',
      Type: 'series',
      totalSeasons: '9',
      Response: 'True',
    },
  ];
  slideInterval: any;

  constructor() {}

  ngOnInit(): void {
    // this.slideInterval = setInterval(() => {
    //   this.setActiveIndex(1);
    // }, 5000);
  }

  setActiveIndex(step: number) {
    const newIndex = this.activeIndex + step;
    if (newIndex > this.searchResult.length - 1) {
      this.activeIndex = 0;
    } else if (newIndex < 0) {
      this.activeIndex = this.searchResult.length - 1;
    } else {
      this.activeIndex = newIndex;
    }
    this.isOpen = !this.isOpen;
  }

  ngOnDestroy(): void {
    clearInterval(this.slideInterval);
  }
}
