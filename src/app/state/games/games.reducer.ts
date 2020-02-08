import { createEntityAdapter, EntityAdapter, EntityState } from '@ngrx/entity';
import { Action, createReducer, on } from '@ngrx/store';

import {IGame} from "../../features/games/types/game.interface";
import {IJackpot} from "../../features/games/types/jackpot.interface";
import {gamesActions} from "./games.actions";
import {GamesFilter} from "../../features/games/types/games-filter.type";

export interface IGamesState extends EntityState<IGame> {
  loadGamesPending: boolean;
  loadGamesSuccess: boolean;
  loadGamesError: any;

  loadJackpotsPending: boolean;
  loadJackpotsSuccess: boolean;
  loadJackpotsError: any;

  jackpots: IJackpot[];

  filters: GamesFilter[];
}

export const adapter: EntityAdapter<IGame> = createEntityAdapter<IGame>({
  selectId: (game: IGame) => game.id,
});

export const initialState: IGamesState = adapter.getInitialState({
  loadGamesPending: false,
  loadGamesSuccess: false,
  loadGamesError: null,

  loadJackpotsPending: false,
  loadJackpotsSuccess: false,
  loadJackpotsError: null,

  jackpots: [],

  filters: [],
});

export const planetsReducer = createReducer(
  initialState,

  on(
    gamesActions.loadGames,
    state => ({
      ...state,
      loadGamesPending: true,
      loadGamesSuccess: false,
      loadGamesError: null,
    }),
  ),
  on(
    gamesActions.loadGamesSuccess,
    (state, { games }) => adapter.addMany(games, {
      ...state,
      loadGamesPending: false,
      loadGamesSuccess: true,
      loadGamesError: null,
    }),
  ),
  on(
    gamesActions.loadGamesError,
    (state, { error }) => ({
      ...state,
      loadGamesPending: false,
      loadGamesSuccess: false,
      loadGamesError: error,
    }),
  ),

  //

  on(
    gamesActions.loadJackpots,
    state => ({
      ...state,
      loadJackpotsPending: true,
      loadJackpotsSuccess: false,
      loadJackpotsError: null,
    }),
  ),
  on(
    gamesActions.loadJackpotsSuccess,
    (state, { jackpots }) => ({
      ...state,
      jackpots,
      loadJackpotsPending: false,
      loadJackpotsSuccess: true,
      loadJackpotsError: null,
    }),
  ),
  on(
    gamesActions.loadGamesError,
    (state, { error }) => ({
      ...state,
      loadJackpotsPending: false,
      loadJackpotsSuccess: false,
      loadJackpotsError: error,
    }),
  ),

  //

  on(
    gamesActions.setFilters,
    (state, { filters }) => ({
      ...state,
      filters,
    }),
  )

);

export function reducer(state: IGamesState | undefined, action: Action) {
  return planetsReducer(state, action);
}
