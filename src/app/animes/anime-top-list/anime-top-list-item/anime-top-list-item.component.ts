import { Component, Input, OnInit, HostListener } from '@angular/core';
import { AnimeService } from 'src/app/services/anime.service';
import { Anime } from 'src/app/models/anime-model';
import { AnimeRating } from 'src/app/models/anime-rating-model';

@Component({
  selector: 'app-anime-top-list-item',
  templateUrl: './anime-top-list-item.component.html',
  styleUrls: ['./anime-top-list-item.component.sass']
})
export class AnimeTopListItemComponent implements OnInit {

  @Input()
  anime: AnimeRating = new AnimeRating(0, '', '', 0.0);

  public innerWidth: any;

  @HostListener('window:resize', ['$event'])
  onResize(event:any) {
    this.innerWidth = window.innerWidth;
  }

  constructor(private animeService: AnimeService) { }

  ngOnInit(): void {
    this.innerWidth = window.innerWidth;
  }


}
