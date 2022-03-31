import { Injectable } from '@angular/core';
import { Rating } from './anime-details/rating-model';



@Injectable({
  providedIn: 'root'
})
export class RatingService {

  ratings: Rating[] = [
    new Rating(1, 4.5, 'good', {id: 1, name: 'rtry'}),
    new Rating(1, 3.5, 'ok', {id: 2, name: 'admin'}),
    new Rating(1, 4.5, 'good', {id: 3, name: 'some user'}),
    new Rating(2, 3.5, 'ok', {id: 1, name: 'rtry'}),
    new Rating(2, 3.5, 'ok ok', {id: 2, name: 'admin'}),
    new Rating(2, 2.5, 'meh', {id: 3, name: 'some user'})
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
    return sum / animeRatings.length;
  }

  constructor() { }
}
