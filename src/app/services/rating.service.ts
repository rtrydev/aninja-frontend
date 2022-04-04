import { Injectable } from '@angular/core';
import { Rating } from '../models/rating-model';
import { AnimeRating } from '../models/anime-rating-model';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';



@Injectable({
  providedIn: 'root'
})
export class RatingService {

  public getRatingsForAnime(animeId : number){
    return this.httpClient
      .get<Rating[]>('http://rtrydev.com/api/anime/' + animeId + '/rating');
  }

  public getAvgRatingForAnime(animeId : number){
    return this.httpClient
      .get<number>('http://rtrydev.com/api/anime/' + animeId + '/rating/avg');
  }

  

  constructor(private httpClient: HttpClient) { }
}
