import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { AnimeService } from '../anime.service';
import { AnimeDetails } from '../animes/anime-details-model';
import { Demographic } from '../animes/anime-details-model';
import { Status } from '../animes/anime-details-model';

@Component({
  selector: 'app-anime-details',
  templateUrl: './anime-details.component.html',
  styleUrls: ['./anime-details.component.sass']
})
export class AnimeDetailsComponent implements OnInit {

  anime: AnimeDetails | undefined = undefined;
  Demographic: any = Demographic;
  Status: any = Status;

  constructor(private route: ActivatedRoute, private animeService : AnimeService) { }

  ngOnInit(): void {
    this.anime = this.animeService.getAnime(this.route.snapshot.params['id']);

    this.route.params
      .subscribe(
        params => {
          this.anime = this.animeService.getAnime(params['id']);
        }
      );
  }

}
