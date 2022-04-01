import { Component, Input, OnInit } from '@angular/core';
import { AnimeDetails } from 'src/app/animes/anime-details-model';
import { RatingService } from 'src/app/rating.service';

@Component({
  selector: 'app-rating',
  templateUrl: './rating.component.html',
  styleUrls: ['./rating.component.sass']
})
export class RatingComponent implements OnInit {

  @Input()
  anime: AnimeDetails | undefined = undefined;

  ratingAvg: number = 0.0;
  constructor(private ratingService: RatingService) { }

  ngOnInit(): void {
    if(this.anime !== undefined){
      this.ratingAvg = this.ratingService.getAvgRatingForAnime(this.anime?.id);
    }
  }

}
