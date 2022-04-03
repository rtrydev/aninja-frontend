import { Injectable } from '@angular/core';
import { Tag } from '../models/tag-model';

@Injectable({
  providedIn: 'root'
})
export class TagService {

  private tags: Tag[] = [
    new Tag(1, 'Horror', 'Scary'),
    new Tag(2, 'Comedy', 'Funny'),
    new Tag(3, 'Music', 'About music'),
    new Tag(4, 'Slice of life', 'Daily life'),
  ];

  getTags() {
    return this.tags.slice();
  }

  constructor() { }
}
