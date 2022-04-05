import { HttpClient } from '@angular/common/http';
import { Injectable, EventEmitter } from '@angular/core';
import { Params } from '@angular/router';
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
      .get<AnimeRating[]>('http://rtrydev.com/api/anime/top');
    }
    return this.httpClient
      .get<AnimeRating[]>('http://rtrydev.com/api/anime/top', {params: {'Filter': filter}});
    
  }

  getAnimes(params: Params | null = null) {
    return this.httpClient
      .get<AnimeGetAllResult>('http://rtrydev.com/api/anime', {params: {...params}});
  }

  getAnime(id: number) {
    return this.httpClient
      .get<AnimeDetails>('http://rtrydev.com/api/anime/' + id);
  }

  constructor(private httpClient: HttpClient) { }
}
