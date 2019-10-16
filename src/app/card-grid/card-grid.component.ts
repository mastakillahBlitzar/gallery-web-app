import { Component, OnInit } from '@angular/core';
import { CharacterInfo } from '../models/character.model';
import { CharactersService } from '../characters.service';

@Component({
  selector: 'app-card-grid',
  templateUrl: './card-grid.component.html',
  styleUrls: ['./card-grid.component.scss']
})
export class CardGridComponent implements OnInit {

  characters: CharacterInfo[] = []
  constructor(
    private characterService: CharactersService
  ) { }

  ngOnInit() {
    this.getCharacters(20);
  }

  getCharacters(count) {
    this.characterService.get('/character', { count }).subscribe(
      (data: any) => {
        this.characters = data.results.map(e => this.mapCharacters(e));
        this.characters.sort((d1, d2) => d2.date - d1.date);
      },
      (err) => {
        console.log('err', err);
      }
    )
  }

  mapCharacters(info): CharacterInfo {
    return {
      details: [
        {
          label: 'STATUS',
          value: info.status
        },
        {
          label: 'SPECIES',
          value: info.species
        },
        {
          label: 'GENDER',
          value: info.gender
        },
        {
          label: 'ORIGIN',
          value: info.origin.name
        },
        {
          label: 'LAST LOCATION',
          value: info.location.name
        },
      ],
      image: info.image,
      name: info.name,
      date: info.episode.length
    }
  }

}
