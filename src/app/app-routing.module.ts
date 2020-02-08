import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {GamesResolver} from "./features/games/resolvers/games.resolver";
import {JackpotsResolver} from "./features/games/resolvers/jackpots.resolver";



const routes: Routes = [
  {
    path: 'games',
    loadChildren: () => import('./features/games/games.module').then(m => m.GamesModule),
    resolve: {
      games: GamesResolver,
      jackpots: JackpotsResolver,
    },
    runGuardsAndResolvers: 'always',
  },
  {
    path: '',
    redirectTo: 'games',
    pathMatch: 'full',
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
