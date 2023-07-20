import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home.component';
import { HomeRoutingModule } from './home-routing.module';
import { SearchBarModule } from 'src/app/shared/search-bar/search-bar.module';
import { HeaderModule } from 'src/app/core/basic-layout/header/header.module';
import { PokemonCardComponent } from './components/pokemon-card/pokemon-card.component';
import { RouterModule } from '@angular/router';
import { MatIconModule } from '@angular/material/icon';

@NgModule({
  declarations: [HomeComponent, PokemonCardComponent],
  imports: [
    CommonModule,
    HomeRoutingModule,
    SearchBarModule,
    HeaderModule,
    RouterModule,
    MatIconModule
  ]
})
export class HomeModule { }

