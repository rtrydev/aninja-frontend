import { Injectable } from '@angular/core';
import { Rating } from '../models/rating-model';
import { AnimeRating } from '../models/anime-rating-model';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';
import { RatingAdd } from '../models/rating-add-model';
import { apiUrl } from '../app.module';



@Injectable({
  providedIn: 'root'
})
export class RatingService {

  public getRatingsForAnime(animeId : number){
    return this.httpClient
      .get<Rating[]>(apiUrl + '/anime/' + animeId + '/rating');
  }

  public getAvgRatingForAnime(animeId : number){
    return this.httpClient
      .get<number>(apiUrl + '/anime/' + animeId + '/rating/avg');
  }

  public publishRatingForAnime(animeId: number, rating: RatingAdd){
    return this.httpClient
      .post<Rating>(apiUrl + '/anime/' + animeId + '/rating', rating);
  }
  

  constructor(private httpClient: HttpClient) { }
}
