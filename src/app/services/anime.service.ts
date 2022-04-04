import { HttpClient } from '@angular/common/http';
import { Injectable, EventEmitter } from '@angular/core';
import { Params } from '@angular/router';
import { AnimeDetails, Demographic, Status } from '../models/anime-details-model';
import { Anime } from '../models/anime-model';
import { map, pluck } from 'rxjs/operators';
import { AnimeGetAllResult } from '../models/anime-getall-result';

@Injectable({
  providedIn: 'root'
})
export class AnimeService {

  getTopAnimes(){
    return this.httpClient
      .get<Anime[]>('http://rtrydev.com/api/anime/top');
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
