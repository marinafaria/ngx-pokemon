import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class PokedexService {

  constructor(private http: HttpClient) { }

  getPokemonPaginated(offset = 0, limit = 20): Observable<any> {
    return this.http.get(`${environment.baseApiUrl}/pokemon/?offset=${offset}&limit=${limit}`)
      .pipe(map(this.handlePokemonResults)
      );
    }

  handlePokemonResults(results: any): any {
    return results.result;
  }
}
