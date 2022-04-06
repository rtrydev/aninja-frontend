import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Tag } from '../models/tag-model';

@Injectable({
  providedIn: 'root'
})
export class TagService {

  getTags() {
    return this.httpClient.get<Tag[]>('http://rtrydev.com/api/tag');
  }

  getTagsForAnime(id: number | undefined){
    return this.httpClient.get<Tag[]>('http://rtrydev.com/api/anime/' + id + '/tag');
  }

  constructor(private httpClient: HttpClient) { }
}
