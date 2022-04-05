import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Character, Gender } from '../models/character-model';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class CharacterService {

  getCharacters(id: number) {
    return this.httpClient
      .get<Character[]>('http://rtrydev.com/api/anime/' + id + '/character')
  }

  constructor(private httpClient: HttpClient) { }
}
