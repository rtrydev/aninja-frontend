import { Component, OnInit } from '@angular/core';
import { Anime } from '../anime-model';
import { AnimeService } from 'src/app/anime.service';

@Component({
  selector: 'app-anime-top-list',
  templateUrl: './anime-top-list.component.html',
  styleUrls: ['./anime-top-list.component.sass']
})
export class AnimeTopListComponent implements OnInit {

  animes: Anime[] = [];

  constructor(private animeService: AnimeService) { }

  ngOnInit(): void {
    this.animes = this.animeService.getAnimes();
  }

}
