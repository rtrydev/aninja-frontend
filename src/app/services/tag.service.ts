import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { apiUrl } from '../app.module';
import { Tag } from '../models/tag-model';

@Injectable({
  providedIn: 'root'
})
export class TagService {

  getTags() {
    return this.httpClient.get<Tag[]>(apiUrl + '/tag');
  }

  getTagsForAnime(id: number | undefined){
    return this.httpClient.get<Tag[]>(apiUrl + '/anime/' + id + '/tag');
  }

  constructor(private httpClient: HttpClient) { }
}
