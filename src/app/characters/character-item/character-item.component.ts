import { Component, Input, OnInit } from '@angular/core';
import { Character } from 'src/app/models/character-model';

@Component({
  selector: 'app-character-item',
  templateUrl: './character-item.component.html',
  styleUrls: ['./character-item.component.sass']
})
export class CharacterItemComponent implements OnInit {

  @Input()
  character: Character | undefined = undefined;
  constructor() { }

  ngOnInit(): void {
  }

}
