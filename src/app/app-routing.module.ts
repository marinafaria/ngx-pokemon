import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  {
    path: '', 
    loadChildren: async () => (await import('./modules/home/home.module')).HomeModule
  },
  {
    path: 'pokemon/:name', 
    loadChildren: async () => (await import('./modules/pokemon/pokemon.module')).PokemonModule
  },
  {
    path: '**', 
    redirectTo: ''
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { relativeLinkResolution: 'legacy' })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
