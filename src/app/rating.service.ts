import { Injectable } from '@angular/core';
import { Rating } from './anime-details/rating-model';
import { AnimeRating } from './animes/anime-rating-model';



@Injectable({
  providedIn: 'root'
})
export class RatingService {

  private ratings: Rating[] = [
    new Rating(1, 4.5, 'good', {id: 1, name: 'rtry'}),
    new Rating(1, 3.5, 'ok', {id: 2, name: 'admin'}),
    new Rating(1, 4.5, 'good', {id: 3, name: 'some user'}),
    new Rating(2, 3.5, 'ok', {id: 1, name: 'rtry'}),
    new Rating(2, 3.5, 'ok ok', {id: 2, name: 'admin'}),
    new Rating(2, 2.5, 'meh', {id: 3, name: 'some user'})
  ];

  private animes: AnimeRating[] = [
    new AnimeRating(1, 'Higurashi no naku koro ni', 'https://cdn.myanimelist.net/images/anime/12/19634.jpg', this.getAvgRatingForAnime(1)),
    new AnimeRating(2, 'Death Note', 'https://cdn.myanimelist.net/images/anime/9/9453.jpg', this.getAvgRatingForAnime(2)),
    new AnimeRating(3, 'Kaguya-sama wa korurasetai', 'https://cdn.myanimelist.net/images/anime/1430/118919.jpg', this.getAvgRatingForAnime(3)),
    new AnimeRating(4, 'Komi-san wa, Comyushou desu', 'https://cdn.myanimelist.net/images/anime/1108/121157.jpg', this.getAvgRatingForAnime(4)),
    new AnimeRating(5, 'Jojo no kimyouna bouken', 'https://cdn.myanimelist.net/images/anime/3/40409.jpg', this.getAvgRatingForAnime(5)),
    new AnimeRating(6, 'Spy x Family', 'https://cdn.myanimelist.net/images/anime/1440/121382.jpg', this.getAvgRatingForAnime(6)),
    new AnimeRating(7, 'Aharen-san wa Hakarenai', 'https://cdn.myanimelist.net/images/anime/1612/120636.jpg', this.getAvgRatingForAnime(7)),
    new AnimeRating(8, 'Umineko no naku koro ni', 'https://cdn.myanimelist.net/images/anime/10/17709.jpg', this.getAvgRatingForAnime(8)),
    new AnimeRating(9, 'Bakemonogatari', 'https://cdn.myanimelist.net/images/anime/11/75274.jpg', this.getAvgRatingForAnime(9)),
    new AnimeRating(10, 'Fullmetal Alchemist: Brotherhood', 'https://cdn.myanimelist.net/images/anime/1223/96541.jpg', this.getAvgRatingForAnime(10))
  ];

  public getRatingsForAnime(animeId : number){
    return this.ratings.filter(x => x.animeId == animeId).slice();
  }

  public getAvgRatingForAnime(animeId : number){
    let sum = 0.0;
    let animeRatings = this.ratings.filter(x => x.animeId == animeId).slice();
    animeRatings.forEach(element => {
      sum += element.note;
    });
    if(animeRatings.length === 0) return 0.0;
    return sum / animeRatings.length;
  }

  getAnimesWithTopRating(){
    return this.animes.slice();
  }

  constructor() { }
}
