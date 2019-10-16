import { Component, OnInit, Input } from '@angular/core';
import { CharacterInfo } from '../models/character.model';

@Component({
  selector: 'app-character-card',
  templateUrl: './character-card.component.html',
  styleUrls: ['./character-card.component.scss']
})
export class CharacterCardComponent implements OnInit {

  @Input() character: CharacterInfo;

  constructor() { }

  ngOnInit() {
  }

}
