import { Component, OnInit, HostListener } from '@angular/core';
import { Anime } from '../models/anime-model';
import { AnimeService } from '../services/anime.service';
import { AnimeListComponent } from './anime-list/anime-list.component';

@Component({
  selector: 'app-animes',
  templateUrl: './animes.component.html',
  styleUrls: ['./animes.component.sass']
})
export class AnimesComponent implements OnInit {

  public innerWidth: any;
  animes: Anime[] = [];
  allAnimeCount: number = 0;
  

  @HostListener('window:resize', ['$event'])
  onResize(event:any) {
    this.innerWidth = window.innerWidth;
  }

  constructor(private animeService: AnimeService) { }

  ngOnInit() {
      this.innerWidth = window.innerWidth;
      this.animeService.getAnimes().subscribe(
        result => {
          this.animes = result.animes;
          this.allAnimeCount = result.allCount;
        }
      );

  }

}
