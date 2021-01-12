import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderModule } from 'src/app/core/basic-layout/header/header.module';
import { PokemonComponent } from './pokemon.component';
import { RouterModule } from '@angular/router';

@NgModule({
  declarations: [PokemonComponent],
  imports: [
    CommonModule,
    HeaderModule,
    RouterModule.forChild([{
      path:'',
      component: PokemonComponent
    }])
  ]
})
export class PokemonModule { }

