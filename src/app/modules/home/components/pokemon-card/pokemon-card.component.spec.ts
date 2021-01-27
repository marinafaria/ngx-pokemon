import { async, ComponentFixture, TestBed } from "@angular/core/testing"
import { of } from "rxjs";
import { PokedexService } from "src/app/core/services/pokedex.service"
import { PokemonCardComponent } from "./pokemon-card.component"

describe('PokemonCardComponent', () => {
  let component: PokemonCardComponent;
  let fixture: ComponentFixture<PokemonCardComponent>;
  beforeEach( async ( () => { 
    TestBed.configureTestingModule({
      providers: [
        {
          provide: PokedexService,
          useValue: {
            getPokemonByName: () => of ({
              name: 'localiza',
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
      ]
  }).compileComponents();
    fixture = TestBed.createComponent(PokemonCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }))

  it('should create', () => {
    component.pokedex = { 
      name: 'calculadora',
      url: 'google.com'
    }
    fixture.detectChanges();
    expect(component).toBeTruthy();
  })
  
  it('should render pokemon name', () => {
    const text = fixture.nativeElement.querySelector('.pokemon-name');
    expect(text.innerHTML).toContain('localiza');
  })
})