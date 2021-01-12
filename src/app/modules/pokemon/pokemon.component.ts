import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { PokedexService } from 'src/app/core/services/pokedex.service';
import { Pokemon } from 'src/app/models/pokemon.model';

@Component({
  selector: 'app-pokemon',
  templateUrl: './pokemon.component.html',
  styleUrls: ['./pokemon.component.scss']
})
export class PokemonComponent implements OnInit {

  pokemon: Pokemon;

  constructor(
    private pokemonService: PokedexService,
    private activatedRoute: ActivatedRoute
  ) { }

  ngOnInit(): void {
    const pokemonName = this.activatedRoute.snapshot.params.name;
    this.pokemonService.getPokemonByName(pokemonName).subscribe(result => this.pokemon = result);
  }

}
