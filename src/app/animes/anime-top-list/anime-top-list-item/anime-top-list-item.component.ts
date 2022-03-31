import { Component, Input, OnInit, HostListener } from '@angular/core';
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
