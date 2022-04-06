import { Component, OnInit } from '@angular/core';
import { Tag } from 'src/app/models/tag-model';
import { TagService } from 'src/app/services/tag.service';

@Component({
  selector: 'app-tags',
  templateUrl: './tags.component.html',
  styleUrls: ['./tags.component.sass']
})
export class TagsComponent implements OnInit {

  public tags: Tag[] = [];
  constructor(private tagService: TagService) { }

  ngOnInit(): void {
    this.tagService.getTags().subscribe(
      result => {
        this.tags = result;
      }
    )
  }

}
