import { Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator, PageEvent } from '@angular/material/paginator';
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
  lowLimit: number;
  highLimit: number;

  @ViewChild(MatPaginator) paginator: MatPaginator;

  constructor(
    private pokedexService: PokedexService,
    private router: Router
  ) {
    this.lowLimit = 0;
    this.highLimit = 6;
   }

  get listSize(): number{
    return this.pokemonList$.value.length 
  }

  ngOnInit(): void {
    this.pokemonList$ = this.pokedexService.pokemonList$;
  }

  handlePokemonClick(pokemon: PokedexRequest) {
    this.router.navigate([`pokemon/${pokemon.name}`]);
  }

  handlePokemonSearchedResults(list: PokedexRequest[]) {
    this.paginator.firstPage();
    this.pokemonList$.next(list);
  }

  getPaginatorData(event: PageEvent): PageEvent {
    this.lowLimit = event.pageIndex * event.pageSize;
    this.highLimit = this.highLimit + event.pageSize;
    return event;
  }

}
