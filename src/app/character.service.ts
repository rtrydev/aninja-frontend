import { Injectable } from '@angular/core';
import { Character, Gender } from './characters/character-model';

@Injectable({
  providedIn: 'root'
})
export class CharacterService {

  private characters: Character[] = [
    new Character(1, '前原 圭一', 'Keiichi Maebara', 'https://cdn.myanimelist.net/images/characters/4/424253.jpg', Gender.Male, 'Hoshi Souichirou', 'https://cdn.myanimelist.net/images/voiceactors/2/44478.jpg'),
    new Character(2, '古手 梨花', 'Rika Furude', 'https://cdn.myanimelist.net/images/characters/15/451011.jpg', Gender.Female, 'Tamura Yukari', 'https://cdn.myanimelist.net/images/voiceactors/3/54665.jpg'),
    new Character(3, '竜宮 レナ', 'Rena Ryuuguu', 'https://cdn.myanimelist.net/images/characters/13/264395.jpg', Gender.Female, 'Nakahara Mai', 'https://cdn.myanimelist.net/images/voiceactors/1/54693.jpg'),
    new Character(4, '園崎 詩音', 'Shion Sonozaki', 'https://cdn.myanimelist.net/images/characters/12/421325.jpg', Gender.Female, 'Satsuki Yukino', 'https://cdn.myanimelist.net/images/voiceactors/2/18113.jpg'),
    new Character(5, '園崎 魅音', 'Mion Sonozaki', 'https://cdn.myanimelist.net/images/characters/10/442810.jpg', Gender.Female, 'Satsuki Yukino', 'https://cdn.myanimelist.net/images/voiceactors/2/18113.jpg'),
  ]

  getCharacters() {
    return this.characters.slice();
  }

  constructor() { }
}
