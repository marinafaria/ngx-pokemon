import { ComponentFixture } from '@angular/core/testing';
import { render, RenderResult } from '@testing-library/angular';
import { BehaviorSubject } from 'rxjs';
import { HeaderModule } from 'src/app/core/basic-layout/header/header.module';
import { PokedexService } from 'src/app/core/services/pokedex.service';
import { PokedexRequest } from 'src/app/models/pokedex-request.model';
import { SearchBarModule } from 'src/app/shared/search-bar/search-bar.module';
import { PokemonComponent } from '../pokemon/pokemon.component';
import { PokemonCardComponent } from './components/pokemon-card/pokemon-card.component';
import { HomeComponent } from './home.component';
import { HttpClientTestingModule } from '@angular/common/http/testing'

describe('HomeComponent', () => {
  let component: HomeComponent;
  let fixture: ComponentFixture<HomeComponent>;
  let renderResult: RenderResult<HomeComponent>;

  beforeEach(async () => {
    renderResult = await render(HomeComponent, {
      declarations: [PokemonComponent, PokemonCardComponent],
      routes: [
        {
          path: '',
          children: [
            {
              path: 'pokemon/:name',
              component: PokemonComponent,
            },
          ],
        },
      ],
      imports:  [HeaderModule, SearchBarModule, HttpClientTestingModule],
      providers: [PokedexService],
      componentProperties: {
        pokemonList$: new BehaviorSubject<PokedexRequest[]>([
          {
          name: 'pikachu',
          url: 'pikachu.com'
          },
          {
            name: 'blastoise',
            url: 'blastoise.com'
          },
          {
            name: 'squirtle',
            url: 'squirtle.com'
          },
          {
            name: 'charmander',
            url: 'charmander.com'
          },
          {
            name: 'bulbasaur',
            url: 'bulbasaur.com'
          },
          {
            name: 'miau',
            url: 'miau.com'
          },
          {
            name: 'pichu',
            url: 'pichu.com'
          },
          {
            name: 'charizard',
            url: 'charizard.com'
          },
          {
            name: 'lucario',
            url: 'lucario.com'
          },
          {
            name: 'wartortle',
            url: 'wartortle.com'
          },
          {
            name: 'Butterfree',
            url: 'Butterfree.com'
          },
          {
            name: 'pidgey',
            url: 'pidgey.com'
          },
          {
            name: 'rattata',
            url: 'rattata.com'
          },
          {
            name: 'clefairy',
            url: 'clefairy.com'
          },
          {
            name: 'eevee',
            url: 'eevee.com'
          },
        ])
      }
    })
  });

  it('should create', () => {
    const { container } = renderResult;
    expect(container).toBeTruthy();
  });

  it('should render max 10 pokemons', () => {
    const { container } = renderResult;
    expect(container.getElementsByClassName('card-container').length).toBeLessThanOrEqual(10);
  })

  it('should display a pokemon page', () => {
    const { container } = renderResult;
    const card = container.querySelector('.card-container') as HTMLElement;
    card.click();
    console.log(card);
    
  })
});
