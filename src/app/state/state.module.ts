import {CommonModule} from '@angular/common';
import {NgModule} from '@angular/core';
import {reducer as gamesReducer} from './games/games.reducer';
import {EffectsModule} from '@ngrx/effects';
import {GamesEffects} from './games/games.effects';
import {StoreModule} from '@ngrx/store';
import {HttpClientModule} from "@angular/common/http";
import {NavigationActionTiming, routerReducer, RouterState, StoreRouterConnectingModule} from "@ngrx/router-store";
import {RouterSerializer} from "./router/router.serializer";

export enum StoreKey {
  GAMES = 'GAMES',
  ROUTER = 'ROUTER',
}

@NgModule({
  imports: [
    CommonModule,
    HttpClientModule,
    StoreModule.forFeature(StoreKey.GAMES, gamesReducer),
    EffectsModule.forFeature([
      GamesEffects,
    ]),
    StoreRouterConnectingModule.forRoot({
      stateKey: StoreKey.ROUTER,
      serializer: RouterSerializer,
      navigationActionTiming: NavigationActionTiming.PostActivation,
      routerState: RouterState.Full,
    }),
    StoreModule.forFeature(StoreKey.ROUTER, routerReducer, {}),
  ],
})
export class StateModule {
}
