import { Component, OnInit } from '@angular/core';
import { RatingService } from 'src/app/services/rating.service';
import { AnimeRating } from 'src/app/models/anime-rating-model';

@Component({
  selector: 'app-anime-top-list',
  templateUrl: './anime-top-list.component.html',
  styleUrls: ['./anime-top-list.component.sass']
})
export class AnimeTopListComponent implements OnInit {

  animes: AnimeRating[] = [];

  constructor(private ratingService: RatingService) { }

  ngOnInit(): void {
    this.animes = this.ratingService.getAnimesWithTopRating();
  }

}
