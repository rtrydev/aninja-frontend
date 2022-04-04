import { Component, OnInit } from '@angular/core';
import { RatingService } from 'src/app/services/rating.service';
import { AnimeRating } from 'src/app/models/anime-rating-model';
import { AnimeService } from 'src/app/services/anime.service';

import { map } from 'rxjs/operators';
import { firstValueFrom } from 'rxjs';
import { Anime } from 'src/app/models/anime-model';

@Component({
  selector: 'app-anime-top-list',
  templateUrl: './anime-top-list.component.html',
  styleUrls: ['./anime-top-list.component.sass']
})
export class AnimeTopListComponent implements OnInit {

  animes: AnimeRating[] = [];

  constructor(private ratingService: RatingService, private animeService: AnimeService) { }

  ngOnInit(): void {
    this.animeService.getTopAnimes()
    .pipe(map(async resultData => {
      let animeRatings: AnimeRating[] = [];
      for(const anime of resultData){
        let animeDetails: Anime = await firstValueFrom(this.animeService.getAnime(anime.id));
        let rating: number = await firstValueFrom(this.ratingService.getAvgRatingForAnime(anime.id));
        let animeRating: AnimeRating = new AnimeRating(anime.id, anime.translatedTitle, animeDetails.imgUrl, rating);
        animeRatings.push(animeRating);
      }
      return animeRatings;
    }))
    .subscribe(
      result => {
        result.then(ratingResult => {
          this.animes = ratingResult;
        });
      }
    );
  }

}
