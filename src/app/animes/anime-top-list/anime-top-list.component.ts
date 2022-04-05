import { Component, Input, OnInit } from '@angular/core';
import { RatingService } from 'src/app/services/rating.service';
import { AnimeRating } from 'src/app/models/anime-rating-model';
import { AnimeService } from 'src/app/services/anime.service';


@Component({
  selector: 'app-anime-top-list',
  templateUrl: './anime-top-list.component.html',
  styleUrls: ['./anime-top-list.component.sass']
})
export class AnimeTopListComponent implements OnInit {

  @Input()
  type?: string;

  animes: AnimeRating[] = [];

  constructor(private ratingService: RatingService, private animeService: AnimeService) { }

  ngOnInit(): void {
    this.animeService.getTopAnimes(this.type)
      .subscribe(result => {
        this.animes = result;
      });
  }

}
