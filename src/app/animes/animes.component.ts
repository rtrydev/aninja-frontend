import { Component, OnInit } from '@angular/core';
import { AnimeListComponent } from './anime-list/anime-list.component';

@Component({
  selector: 'app-animes',
  templateUrl: './animes.component.html',
  styleUrls: ['./animes.component.sass']
})
export class AnimesComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
