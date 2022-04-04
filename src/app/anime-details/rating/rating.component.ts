import { Component, Input, OnInit } from '@angular/core';
import { AnimeDetails } from 'src/app/models/anime-details-model';
import { RatingService } from 'src/app/services/rating.service';

@Component({
  selector: 'app-rating',
  templateUrl: './rating.component.html',
  styleUrls: ['./rating.component.sass']
})
export class RatingComponent implements OnInit {

  @Input()
  anime: AnimeDetails | null = null;

  ratingAvg: number = 0.0;
  constructor(private ratingService: RatingService) { }

  ngOnInit(): void {
    if(this.anime !== null){
      this.ratingService.getAvgRatingForAnime(this.anime?.id)
        .subscribe(result => {
          this.ratingAvg = result;
        })
    }
  }

}
