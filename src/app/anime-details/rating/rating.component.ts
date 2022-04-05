import { Component, Input, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { AnimeDetails } from 'src/app/models/anime-details-model';
import { RatingService } from 'src/app/services/rating.service';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-rating',
  templateUrl: './rating.component.html',
  styleUrls: ['./rating.component.sass']
})
export class RatingComponent implements OnInit, OnDestroy {

  @Input()
  anime: AnimeDetails | null = null;

  ratingEnabled: boolean = false;

  private userSubscription: Subscription | null = null;

  ratingAvg: number = 0.0;
  constructor(private ratingService: RatingService, private userService: UserService) { }

  ngOnInit(): void {

    this.userSubscription = this.userService.currentUser.subscribe(
      user => {
        this.ratingEnabled = !!user;
      }
    )

    if(this.anime !== null){
      this.ratingService.getAvgRatingForAnime(this.anime?.id)
        .subscribe(result => {
          this.ratingAvg = result;
        })
    }
  }
  ngOnDestroy(): void {
    this.userSubscription?.unsubscribe();
  }

}
