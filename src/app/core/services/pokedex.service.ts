import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { map, tap } from 'rxjs/operators';
import { PokedexRequest } from 'src/app/models/pokedex-request.model';
import { Pokemon } from 'src/app/models/pokemon.model';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class PokedexService {

  pokemonList$ = new BehaviorSubject<PokedexRequest[]>([]);

  constructor(private http: HttpClient) { }

  getAllPokemonPaginated(offset = 0, limit = 20): Observable<any> {
    return this.http.get(`${environment.baseApiUrl}/pokemon/?offset=${offset}&limit=${limit}`)
      .pipe(
        map(this.handlePokedexResults),
        tap( list => this.pokemonList$.next(list))
      );
  }

  getPokemonByName(name: string): Observable<Pokemon> {
    return this.http.get(`${environment.baseApiUrl}/pokemon/${name}`) as Observable<Pokemon>;
  }

  handlePokedexResults(result: any): PokedexRequest[] {
    return result.results;
  }
}
