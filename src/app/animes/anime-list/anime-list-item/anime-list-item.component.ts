import { Component, Input, OnInit, HostListener } from '@angular/core';
import { AnimeService } from 'src/app/services/anime.service';
import { Anime } from '../../../models/anime-model';

@Component({
  selector: 'app-anime-list-item',
  templateUrl: './anime-list-item.component.html',
  styleUrls: ['./anime-list-item.component.sass']
})
export class AnimeListItemComponent implements OnInit {

  @Input()
  anime: Anime = new Anime(0, '', '');

  public innerWidth: any;

  @HostListener('window:resize', ['$event'])
  onResize(event:any) {
    this.innerWidth = window.innerWidth;
  }

  constructor(private animeService: AnimeService) { }

  ngOnInit(): void {
    this.innerWidth = window.innerWidth;
  }

  onAnimeSelected(anime: Anime) {
    this.animeService.animeSelected.emit(this.anime);
  }

}
