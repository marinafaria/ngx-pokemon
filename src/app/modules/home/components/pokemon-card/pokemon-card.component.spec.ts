import { ComponentFixture, TestBed } from "@angular/core/testing"
import { of } from "rxjs";
import { PokedexService } from "src/app/core/services/pokedex.service"
import { PokemonCardComponent } from "./pokemon-card.component"
import { render, RenderResult } from '@testing-library/angular'

describe('PokemonCardComponent', () => {
  let component: PokemonCardComponent;
  let fixture: ComponentFixture<PokemonCardComponent>;
  let renderResult: RenderResult<PokemonCardComponent>;
  beforeEach( async () => { 
    renderResult = await render(PokemonCardComponent, {
      providers: [
        {
          provide: PokedexService,
          useValue: {
            getPokemonByName: () => of ({
              name: 'pikachu',
              abilities: [],
              game_indices: [],
              sprite: 'img.jpeg',
              types: []
            })
          }
        }
      ],
      declarations: [
        PokemonCardComponent
      ],
      componentProperties: {
        pokedex: { 
          name: 'pikachu',
          url: 'google.com'
        }
      }
  })
    fixture = renderResult.fixture;
    component = fixture.componentInstance;
    fixture.detectChanges();
  })

  it('should create', () => {
    const { container } = renderResult;
    expect(container).toBeTruthy();
  })
  
  it('should render pokemon name', () => {
    const { getByText } = renderResult;
    expect(getByText('pikachu')).toBeInTheDocument();
  })

  it('should load img', () => {
    const { getByAltText } = renderResult;
    expect(getByAltText('pikachu')).toHaveAttribute('src', 'img.jpeg');
  }) 

  it('should load placeholder if there isnt a img', () => {
    const { getByAltText } = renderResult;
    component.pokemon = {
      ...component.pokemon, 
      sprite: null
    }
    fixture.detectChanges();
    expect(getByAltText('pikachu')).toHaveAttribute('src', '/assets/pokeball.jpg');
  })

  it('should emit when a pokemon is clicked', () => {
    component.onPokemonClick.emit = jest.fn();
    const { container } = renderResult;
    const card = container.querySelector('.card-container') as HTMLElement;
    card.click();
    expect(component.onPokemonClick.emit).toBeCalledWith(component.pokedex);
  }) 
})

