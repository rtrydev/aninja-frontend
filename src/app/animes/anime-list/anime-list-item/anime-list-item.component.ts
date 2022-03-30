import { Component, Input, OnInit } from '@angular/core';
import { AnimeService } from 'src/app/anime.service';
import { Anime } from '../../anime-model';

@Component({
  selector: 'app-anime-list-item',
  templateUrl: './anime-list-item.component.html',
  styleUrls: ['./anime-list-item.component.sass']
})
export class AnimeListItemComponent implements OnInit {

  @Input()
  anime: Anime = new Anime(0, '', '');

  constructor(private animeService: AnimeService) { }

  ngOnInit(): void {
  }

  onAnimeSelected(anime: Anime) {
    this.animeService.animeSelected.emit(this.anime);
  }

}
