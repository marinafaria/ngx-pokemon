import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';
import { Pokemon } from 'src/app/models/pokemon.model';

@Component({
  selector: 'app-pokemon-card',
  templateUrl: './pokemon-card.component.html',
  styleUrls: ['./pokemon-card.component.scss']
})
export class PokemonCardComponent implements OnInit {

  @Input() pokemon: Pokemon;
  @Output() onPokemonClick = new EventEmitter<Pokemon>();

  constructor() { }

  ngOnInit(): void {
  }

}
