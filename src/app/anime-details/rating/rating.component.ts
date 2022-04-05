import { Component, EventEmitter, Input, OnDestroy, OnInit, Output } from '@angular/core';
import { FormBuilder, FormControl, Validators } from '@angular/forms';
import { Subscription } from 'rxjs';
import { AnimeDetails } from 'src/app/models/anime-details-model';
import { RatingAdd } from 'src/app/models/rating-add-model';
import { Rating } from 'src/app/models/rating-model';
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

  @Output()
  ratingAdd = new EventEmitter<Rating>();

  ratingEnabled: boolean = false;
  maxRatingLength = 2000;

  ratingAdded: boolean = false;
  ratingFailed: boolean = false;

  ratingForm = this.formBuilder.group({
    mark: new FormControl(10, Validators.required),
    comment: new FormControl('', Validators.maxLength(this.maxRatingLength))
  });

  get ratingFormControls() {
    return this.ratingForm.controls;
  }

  private userSubscription: Subscription | null = null;

  ratingAvg: number = 0.0;
  constructor(private ratingService: RatingService, private userService: UserService, private formBuilder: FormBuilder) { }

  ngOnInit(): void {

    this.userSubscription = this.userService.currentUser.subscribe(
      user => {
        this.ratingEnabled = !!user;
      }
    )

    if (this.anime !== null) {
      this.ratingService.getAvgRatingForAnime(this.anime?.id)
        .subscribe(result => {
          this.ratingAvg = result;
        })
    }
  }
  ngOnDestroy(): void {
    this.userSubscription?.unsubscribe();
  }

  onSubmit() {
    this.ratingAdded = false;
    this.ratingFailed = false;
    let rating = new RatingAdd(this.ratingForm.value.mark, this.ratingForm.value.comment);
    if (this.anime) {
      this.ratingService.publishRatingForAnime(this.anime?.id, rating)
        .subscribe(result => {
          this.ratingAdd.emit(result);
          if (this.anime !== null) {
            this.ratingService.getAvgRatingForAnime(this.anime?.id)
              .subscribe(result => {
                this.ratingAvg = result;
              })
          }
          this.ratingFormControls['mark'].setValue(10);
          this.ratingFormControls['comment'].setValue('');
          this.ratingAdded = true;
        }, error => {
          this.ratingFailed = true;

        });

    }
  }

}
