import { Component, Input, OnDestroy, OnInit } from '@angular/core';
import { Rating } from '../models/rating-model';
import { RatingService } from 'src/app/services/rating.service';
import { Observable, Subject, Subscription } from 'rxjs';

@Component({
  selector: 'app-comments',
  templateUrl: './comments.component.html',
  styleUrls: ['./comments.component.sass']
})
export class CommentsComponent implements OnInit, OnDestroy {

  @Input()
  animeId: number | undefined = -1;

  @Input()
  ratingAdded?: Observable<Rating | null>;

  private ratingSubscription: Subscription | undefined = undefined;

  comments: Rating[] = [];

  constructor(private ratingService: RatingService) { }

  ngOnInit(): void {

    this.ratingSubscription = this.ratingAdded?.subscribe((rating)=> {
      if(rating !== null){
        this.comments.push(rating);
      }
    })

    if(this.animeId !== undefined){
      this.ratingService.getRatingsForAnime(this.animeId)
        .subscribe(
          result => {
            this.comments = result;
          }
        )
    }
  }

  ngOnDestroy(): void {
    this.ratingSubscription?.unsubscribe();
  }

}
