import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Anime } from '../models/anime-model';
import { AnimeService } from '../services/anime.service';

@Component({
  selector: 'app-anime-search',
  templateUrl: './anime-search.component.html',
  styleUrls: ['./anime-search.component.sass']
})
export class AnimeSearchComponent implements OnInit {

  constructor(private route: ActivatedRoute, private animeService: AnimeService) { }

  anime: Anime[] = [];

  ngOnInit(): void {
    let name = this.route.snapshot.queryParams['name'].toLowerCase();
    this.anime = this.animeService.getAnimes().filter(x => x.translatedTitle.toLowerCase().includes(name));

    this.route.queryParams.subscribe(
      queryParams => {
        let name = queryParams['name'].toLowerCase();
        this.anime = this.animeService.getAnimes().filter(x => x.translatedTitle.toLowerCase().includes(name));
      }
    )
  }

}
