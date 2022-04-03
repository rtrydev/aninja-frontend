import { Component, Input, OnInit } from '@angular/core';
import { AnimeService } from 'src/app/services/anime.service';
import { Anime } from 'src/app/models/anime-model'

@Component({
  selector: 'app-anime-list',
  templateUrl: './anime-list.component.html',
  styleUrls: ['./anime-list.component.sass']
})
export class AnimeListComponent implements OnInit {

  @Input()
  animes: Anime[] = [];

  constructor() { }

  ngOnInit(): void {
  }

}
