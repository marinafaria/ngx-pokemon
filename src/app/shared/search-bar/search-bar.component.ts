import { Component, OnDestroy, OnInit, Output, EventEmitter } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Subject, Subscription } from 'rxjs';
import { debounceTime, filter, switchMap, takeUntil } from 'rxjs/operators';
import { PokedexService } from 'src/app/core/services/pokedex.service';
import { PokedexRequest } from 'src/app/models/pokedex-request.model';
import { Pokemon } from 'src/app/models/pokemon.model';

@Component({
  selector: 'app-search-bar',
  templateUrl: './search-bar.component.html',
  styleUrls: ['./search-bar.component.scss']
})
export class SearchBarComponent implements OnInit, OnDestroy {

  form: FormGroup;
  destroy$ = new Subject();
  formSubscription: Subscription;

  @Output() searchedResults = new EventEmitter<PokedexRequest[]>();

  constructor(
    private fb: FormBuilder,
    private pokedexService: PokedexService
  ) { }

  ngOnInit(): void {
    this.form = this.fb.group({
      searchInput: ''
    });
    this.handleForm();
  }

  handleForm(): void {
    this.form.controls.searchInput.valueChanges
    .pipe(
      filter(input => String(input).length >= 3),
      takeUntil(this.destroy$),
      debounceTime(1000),
      switchMap( input => {
        // return this.pokedexService.getPokemonByName(input);
        const results = this.pokedexService.pokemonList$.getValue()
          .filter( pokemon => pokemon.name.startsWith(input));
          console.log(results);
          
          return results;
      })
    )
    .subscribe((value: any ) => {
      this.searchedResults.emit(value);
    });
  }

  ngOnDestroy(): void {
    this.destroy$.next();
    this.destroy$.complete();
  }
}
