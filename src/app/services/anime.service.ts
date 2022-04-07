import { HttpClient } from '@angular/common/http';
import { Injectable, EventEmitter } from '@angular/core';
import { Params } from '@angular/router';
import { apiUrl } from '../app.module';
import { AnimeDetails, Demographic, Status } from '../models/anime-details-model';
import { AnimeGetAllResult } from '../models/anime-getall-result';
import { AnimeRating } from '../models/anime-rating-model';

@Injectable({
  providedIn: 'root'
})
export class AnimeService {

  getTopAnimes(filter?: string){
    if(!filter || filter === ""){
      return this.httpClient
      .get<AnimeRating[]>(apiUrl + '/anime/top');
    }
    return this.httpClient
      .get<AnimeRating[]>(apiUrl + '/anime/top', {params: {'Filter': filter}});
    
  }

  getAnimes(params: Params | null = null) {
    return this.httpClient
      .get<AnimeGetAllResult>(apiUrl + '/anime', {params: {...params}});
  }

  getAnime(id: number) {
    return this.httpClient
      .get<AnimeDetails>(apiUrl + '/anime/' + id);
  }

  constructor(private httpClient: HttpClient) { }
}
