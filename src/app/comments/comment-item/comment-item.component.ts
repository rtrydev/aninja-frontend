import { Component, Input, OnInit } from '@angular/core';
import { Rating } from 'src/app/models/rating-model';
import { User } from 'src/app/models/user-model';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-comment-item',
  templateUrl: './comment-item.component.html',
  styleUrls: ['./comment-item.component.sass']
})
export class CommentItemComponent implements OnInit {

  @Input()
  comment: Rating | undefined = undefined;
  submitter: User | undefined = undefined;
  showMore: boolean = false;

  constructor(private userService: UserService) { }

  ngOnInit(): void {
    if(this.comment !== undefined){
      this.submitter = this.userService.getUser(this.comment?.submitterId);
    }
  }

  toggleShowMore() {
    this.showMore = !this.showMore;
  }

}
