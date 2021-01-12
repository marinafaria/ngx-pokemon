import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { BehaviorSubject } from 'rxjs';
import { PokedexService } from 'src/app/core/services/pokedex.service';
import { PokedexRequest } from 'src/app/models/pokedex-request.model';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  pokemonList$: BehaviorSubject<PokedexRequest[]>;

  constructor(
    private pokedexService: PokedexService,
    private router: Router
  ) { }

  ngOnInit(): void {
    this.pokemonList$ = this.pokedexService.pokemonList$;
  }

  handlePokemonClick(pokemon: PokedexRequest) {
    this.router.navigate([`pokemon/${pokemon.name}`]);
  }

  handlePokemonSearchedResults(list: PokedexRequest[]) {
    this.pokemonList$.next(list);
  }
}
