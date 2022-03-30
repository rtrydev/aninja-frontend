import { Component, OnInit } from '@angular/core';
import { AnimeService } from 'src/app/anime.service';
import { Anime } from 'src/app/animes/anime-model'

@Component({
  selector: 'app-anime-list',
  templateUrl: './anime-list.component.html',
  styleUrls: ['./anime-list.component.sass']
})
export class AnimeListComponent implements OnInit {

  animes: Anime[] = [];

  constructor(private animeService: AnimeService) { }

  ngOnInit(): void {
    this.animes = this.animeService.getAnimes();
  }

}
