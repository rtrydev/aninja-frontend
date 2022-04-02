import { Component, OnInit } from '@angular/core';
import { CharacterService } from '../services/character.service';
import { Character } from '../models/character-model';

@Component({
  selector: 'app-characters',
  templateUrl: './characters.component.html',
  styleUrls: ['./characters.component.sass']
})
export class CharactersComponent implements OnInit {

  characters: Character[] = [];
  constructor(private characterService: CharacterService) { }

  ngOnInit(): void {
    this.characters = this.characterService.getCharacters();
  }

}
