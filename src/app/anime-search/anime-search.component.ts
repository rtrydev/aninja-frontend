import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Anime } from '../models/anime-model';
import { Tag } from '../models/tag-model';
import { AnimeService } from '../services/anime.service';
import { TagService } from '../services/tag.service';

@Component({
  selector: 'app-anime-search',
  templateUrl: './anime-search.component.html',
  styleUrls: ['./anime-search.component.sass']
})
export class AnimeSearchComponent implements OnInit {

  constructor(private route: ActivatedRoute, private router: Router, private animeService: AnimeService, private formBuilder: FormBuilder, private tagService: TagService) { }
  animeFiltersForm = this.formBuilder.group({
    'name': undefined,
    'orderBy': 'None',
    'demographics' : [],
    'status': undefined,
    'tagIds': []
  });

  onSubmit() {
    let existingParams = this.route.snapshot.queryParams;
    let paramsFromForm = this.animeFiltersForm.value;
    if(existingParams['name'] !== undefined) paramsFromForm['name'] = existingParams['name'];
    
    this.router.navigate(['/anime'], {queryParams: paramsFromForm})
  }

  tags: Tag[] = [];
  animes: Anime[] = [];

  ngOnInit(): void {
    this.tags = this.tagService.getTags();

    let params = this.route.snapshot.queryParams;
    this.animes = this.animeService.getAnimes(params);

    this.route.queryParams.subscribe(
      queryParams => {
        this.animes = this.animeService.getAnimes(queryParams);
      }
    );
  }

}
