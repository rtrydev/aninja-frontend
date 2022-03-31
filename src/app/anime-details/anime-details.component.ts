import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { AnimeService } from '../anime.service';
import { AnimeDetails } from '../animes/anime-details-model';

@Component({
  selector: 'app-anime-details',
  templateUrl: './anime-details.component.html',
  styleUrls: ['./anime-details.component.sass']
})
export class AnimeDetailsComponent implements OnInit {

  anime: AnimeDetails | undefined = undefined;

  constructor(private route: ActivatedRoute, private animeService : AnimeService) { }

  ngOnInit(): void {
    this.anime = this.animeService.getAnime(this.route.snapshot.params['id']);
  }

}
