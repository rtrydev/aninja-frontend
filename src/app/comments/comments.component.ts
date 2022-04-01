import { Component, Input, OnInit } from '@angular/core';
import { Rating } from '../anime-details/rating-model';
import { RatingService } from '../rating.service';

@Component({
  selector: 'app-comments',
  templateUrl: './comments.component.html',
  styleUrls: ['./comments.component.sass']
})
export class CommentsComponent implements OnInit {

  @Input()
  animeId: number | undefined = -1;
  comments: Rating[] = [];
  constructor(private ratingService: RatingService) { }

  ngOnInit(): void {
    if(this.animeId !== undefined){
      this.comments = this.ratingService.getRatingsForAnime(this.animeId);
    }
  }

}