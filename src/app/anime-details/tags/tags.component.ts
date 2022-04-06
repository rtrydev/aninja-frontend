import { Component, Input, OnInit } from '@angular/core';
import { AnimeDetails } from 'src/app/models/anime-details-model';
import { Anime } from 'src/app/models/anime-model';
import { Tag } from 'src/app/models/tag-model';
import { TagService } from 'src/app/services/tag.service';

@Component({
  selector: 'app-tags',
  templateUrl: './tags.component.html',
  styleUrls: ['./tags.component.sass']
})
export class TagsComponent implements OnInit {

  @Input()
  anime: AnimeDetails | null = null;

  public tags: Tag[] = [];
  constructor(private tagService: TagService) { }

  ngOnInit(): void {
    this.tagService.getTagsForAnime(this.anime?.id).subscribe(
      result => {
        this.tags = result;
      }
    )
  }

}
