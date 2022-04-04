import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { AnimeService } from '../services/anime.service';
import { AnimeDetails } from '../models/anime-details-model';
import { Demographic } from '../models/anime-details-model';
import { Status } from '../models/anime-details-model';
import { map } from 'rxjs/operators';
@Component({
  selector: 'app-anime-details',
  templateUrl: './anime-details.component.html',
  styleUrls: ['./anime-details.component.sass']
})
export class AnimeDetailsComponent implements OnInit {

  anime: AnimeDetails | null = null;
  Demographic: any = Demographic;
  Status: any = Status;

  constructor(private route: ActivatedRoute, private animeService: AnimeService) { }

  ngOnInit(): void {

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
            })

        }
      );
  }

}
