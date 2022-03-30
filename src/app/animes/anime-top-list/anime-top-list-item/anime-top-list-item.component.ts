import { Component, Input, OnInit } from '@angular/core';
import { AnimeService } from 'src/app/anime.service';
import { Anime } from '../../anime-model';

@Component({
  selector: 'app-anime-top-list-item',
  templateUrl: './anime-top-list-item.component.html',
  styleUrls: ['./anime-top-list-item.component.sass']
})
export class AnimeTopListItemComponent implements OnInit {

  @Input()
  anime: Anime = new Anime(0, '', '');

  constructor(private animeService: AnimeService) { }

  ngOnInit(): void {
  }

  onAnimeSelected(anime: Anime) {
    this.animeService.animeSelected.emit(this.anime);
  }

}
