import { Injectable, EventEmitter } from '@angular/core';
import { AnimeDetails, Demographic, Status } from './animes/anime-details-model';
import { Anime } from './animes/anime-model';

@Injectable({
  providedIn: 'root'
})
export class AnimeService {

  animeSelected = new EventEmitter<Anime>();

  getAnimes() {
    return this.animes.slice();
  }

  getAnime(id: number){
    return this.animeDetails.find(x => x.id == id);
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

  private animeDetails: AnimeDetails[] = [
    new AnimeDetails(1, 'ひぐらしのなく頃に', 'Higurashi no naku koro ni', 'https://cdn.myanimelist.net/images/anime/12/19634.jpg', '', new Date('2006-05-05T00:00:00Z'), new Date('2006-12-05T00:00:00Z'), 26, Status.FinishedAiring, Demographic.Seinen),
    new AnimeDetails(2, 'デスノート', 'Death Note', 'https://cdn.myanimelist.net/images/anime/9/9453.jpg', '', new Date('2006-05-05T00:00:00Z'), new Date('2006-12-05T00:00:00Z'), 26, Status.FinishedAiring, Demographic.Seinen),
    new AnimeDetails(3, 'かぐや姫は告らせたい','Kaguya-sama wa korurasetai', 'https://cdn.myanimelist.net/images/anime/1430/118919.jpg', '', new Date('2006-05-05T00:00:00Z'), new Date('2006-12-05T00:00:00Z'), 26, Status.CurrentlyAiring, Demographic.Seinen),
    new AnimeDetails(4, '古見さんは、コミュ症です', 'Komi-san wa, Comyushou desu', 'https://cdn.myanimelist.net/images/anime/1108/121157.jpg', '', new Date('2006-05-05T00:00:00Z'), new Date('2006-12-05T00:00:00Z'), 26, Status.CurrentlyAiring, Demographic.Seinen),
    new AnimeDetails(5, 'ジョジョの奇妙な冒険', 'Jojo no kimyouna bouken', 'https://cdn.myanimelist.net/images/anime/3/40409.jpg', '', new Date('2006-05-05T00:00:00Z'), new Date('2006-12-05T00:00:00Z'), 26, Status.FinishedAiring, Demographic.Seinen),
    new AnimeDetails(6, 'スパイファミリ', 'Spy x Family', 'https://cdn.myanimelist.net/images/anime/1440/121382.jpg', '', new Date('2006-05-05T00:00:00Z'), new Date('2006-12-05T00:00:00Z'), 26, Status.CurrentlyAiring, Demographic.Seinen),
    new AnimeDetails(7, '阿波連さんははかれない', 'Aharen-san wa Hakarenai', 'https://cdn.myanimelist.net/images/anime/1612/120636.jpg', '', new Date('2006-05-05T00:00:00Z'), new Date('2006-12-05T00:00:00Z'), 26, Status.CurrentlyAiring, Demographic.Seinen),
    new AnimeDetails(8, 'うみねこのなく頃に', 'Umineko no naku koro ni', 'https://cdn.myanimelist.net/images/anime/10/17709.jpg', '', new Date('2006-05-05T00:00:00Z'), new Date('2006-12-05T00:00:00Z'), 26, Status.FinishedAiring, Demographic.Seinen),
    new AnimeDetails(9, '化物語', 'Bakemonogatari', 'https://cdn.myanimelist.net/images/anime/11/75274.jpg', '', new Date('2006-05-05T00:00:00Z'), new Date('2006-12-05T00:00:00Z'), 26, Status.FinishedAiring, Demographic.Seinen),
    new AnimeDetails(10, '鋼の錬金術師', 'Fullmetal Alchemist: Brotherhood', 'https://cdn.myanimelist.net/images/anime/1223/96541.jpg', '', new Date('2006-05-05T00:00:00Z'), new Date('2006-12-05T00:00:00Z'), 26, Status.FinishedAiring, Demographic.Seinen)
  ]
  constructor() { }
}
