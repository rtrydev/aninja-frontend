import { Component, Input, OnInit } from '@angular/core';
import { CharacterService } from '../services/character.service';
import { Character } from '../models/character-model';

@Component({
  selector: 'app-characters',
  templateUrl: './characters.component.html',
  styleUrls: ['./characters.component.sass']
})
export class CharactersComponent implements OnInit {
  @Input()
  animeId: number | undefined = -1;

  characters: Character[] = [];
  constructor(private characterService: CharacterService) { }

  ngOnInit(): void {
    if(this.animeId !== undefined){
      this.characterService.getCharacters(this.animeId)
      .subscribe(result => {
        this.characters = result;
      })
    }
    
  }

}
