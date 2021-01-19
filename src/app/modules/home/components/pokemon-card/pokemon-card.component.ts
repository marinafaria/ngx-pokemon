import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';
import { PokedexService } from 'src/app/core/services/pokedex.service';
import { PokedexRequest } from 'src/app/models/pokedex-request.model';
import { Pokemon } from 'src/app/models/pokemon.model';

@Component({
  selector: 'app-pokemon-card',
  templateUrl: './pokemon-card.component.html',
  styleUrls: ['./pokemon-card.component.scss']
})
export class PokemonCardComponent implements OnInit {

  @Input() pokedex: PokedexRequest;
  @Output() onPokemonClick = new EventEmitter<PokedexRequest>();

  pokemon: Pokemon;

  placeholder = '/assets/pokeball.jpg';

  constructor(
    private pokedexService: PokedexService
  ) { }

  ngOnInit(): void {  
    this.pokedexService.getPokemonByName(this.pokedex.name).subscribe(pokemon => this.pokemon = pokemon);
  }

}
