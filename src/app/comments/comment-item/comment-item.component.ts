import { Component, Input, OnInit } from '@angular/core';
import { Rating } from 'src/app/anime-details/rating-model';

@Component({
  selector: 'app-comment-item',
  templateUrl: './comment-item.component.html',
  styleUrls: ['./comment-item.component.sass']
})
export class CommentItemComponent implements OnInit {

  @Input()
  comment: Rating | undefined = undefined;
  constructor() { }

  ngOnInit(): void {
  }

}
