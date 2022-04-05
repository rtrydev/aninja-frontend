import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { AnimeService } from '../services/anime.service';
import { AnimeDetails } from '../models/anime-details-model';
import { Demographic } from '../models/anime-details-model';
import { Status } from '../models/anime-details-model';
import { Subject } from 'rxjs';
import { Rating } from '../models/rating-model';
@Component({
  selector: 'app-anime-details',
  templateUrl: './anime-details.component.html',
  styleUrls: ['./anime-details.component.sass']
})
export class AnimeDetailsComponent implements OnInit {

  defaultDate = new Date('1970-01-01T00:00:00Z');
  startDateKnown = false;
  endDateKnown = false;
  anime: AnimeDetails | null = null;
  Demographic: any = Demographic;
  Status: any = Status;

  addedRating: Subject<Rating | null> = new Subject<Rating|null>();

  constructor(private route: ActivatedRoute, private animeService: AnimeService) { }

  ngOnInit(): void {

    this.addedRating.next(null);

    this.animeService.getAnime(this.route.snapshot.params['id'])
      .subscribe(result => {
        this.anime = result;
      })
    this.route.params
      .subscribe(
        params => {
          this.animeService.getAnime(params['id'])
            .subscribe(result => {
              this.anime = result;
              if(result.startDate.toString() !== this.defaultDate.toISOString().replace('.000', '')) this.startDateKnown = true;
              if(result.endDate.toString() !== this.defaultDate.toISOString().replace('.000', '')) this.endDateKnown = true;
            })

        }
      );
  }

  addRatingToList(rating: Rating) {
    this.addedRating.next(rating);
  }

}
