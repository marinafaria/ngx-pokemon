import { Component, OnInit } from '@angular/core';
import { PokedexService } from '../../services/pokedex.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  constructor(
    private pokedexService: PokedexService
  ) { }

  ngOnInit(): void {
    this.pokedexService.getAllPokemonPaginated(0, 1200).subscribe( values => console.log(values));
  }

}
