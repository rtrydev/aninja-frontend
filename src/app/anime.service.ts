import { Injectable, EventEmitter } from '@angular/core';
import { Anime } from './animes/anime-model';

@Injectable({
  providedIn: 'root'
})
export class AnimeService {

  animeSelected = new EventEmitter<Anime>();

  getAnimes() {
    return this.animes.slice();
  }

  private animes: Anime[] = [
    new Anime(1, 'Higurashi no naku koro ni', 'https://cdn.myanimelist.net/images/anime/12/19634.jpg'),
    new Anime(2, 'Death Note', 'https://cdn.myanimelist.net/images/anime/9/9453.jpg'),
    new Anime(3, 'Kaguya-sama wa korurasetai', 'https://cdn.myanimelist.net/images/anime/1430/118919.jpg'),
    new Anime(4, 'Komi-san wa, Comyushou desu', 'https://cdn.myanimelist.net/images/anime/1108/121157.jpg'),
    new Anime(5, 'Jojo no kimyouna bouken', 'https://cdn.myanimelist.net/images/anime/3/40409.jpg'),
    new Anime(6, 'Spy x Family', 'https://cdn.myanimelist.net/images/anime/1440/121382.jpg'),
    new Anime(7, 'Aharen-san wa Hakarenai', 'https://cdn.myanimelist.net/images/anime/1612/120636.jpg'),
    new Anime(8, 'Umineko no naku koro ni', 'https://cdn.myanimelist.net/images/anime/10/17709.jpg'),
    new Anime(9, 'Bakemonogatari', 'https://cdn.myanimelist.net/images/anime/11/75274.jpg'),
    new Anime(10, 'Fullmetal Alchemist: Brotherhood', 'https://cdn.myanimelist.net/images/anime/1223/96541.jpg')
  ];
  constructor() { }
}
