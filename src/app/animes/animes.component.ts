import { Component, OnInit, HostListener } from '@angular/core';
import { AnimeListComponent } from './anime-list/anime-list.component';

@Component({
  selector: 'app-animes',
  templateUrl: './animes.component.html',
  styleUrls: ['./animes.component.sass']
})
export class AnimesComponent implements OnInit {

  public innerWidth: any;
  

  @HostListener('window:resize', ['$event'])
  onResize(event:any) {
    this.innerWidth = window.innerWidth;
  }

  constructor() { }

  ngOnInit() {
      this.innerWidth = window.innerWidth;
  }

}
