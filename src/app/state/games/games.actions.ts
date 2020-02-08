import { createAction, props } from '@ngrx/store';
import {IGame} from '../../features/games/types/game.interface';
import {IJackpot} from "../../features/games/types/jackpot.interface";
import {GamesFilter} from "../../features/games/types/games-filter.type";

export enum GamesActionType {
  LoadGames = '[Games] Load Games',
  LoadGamesSuccess = '[Games] Load Games Success',
  LoadGamesError = '[Games] Load Games Error',

  LoadJackpots = '[Games] Load Jackpots',
  LoadJackpotsSuccess = '[Games] Load Jackpots Success',
  LoadJackpotsError = '[Games] Load Jackpots Error',

  SetFilters = '[Games] Set Filters',
}

const loadGames = createAction(
  GamesActionType.LoadGames,
);

const loadGamesSuccess = createAction(
  GamesActionType.LoadGamesSuccess,
  props<{ games: IGame[] }>(),
);

const loadGamesError = createAction(
  GamesActionType.LoadGamesError,
  props<{ error: any }>(),
);


const loadJackpots = createAction(
  GamesActionType.LoadJackpots,
);

const loadJackpotsSuccess = createAction(
  GamesActionType.LoadJackpotsSuccess,
  props<{ jackpots: IJackpot[] }>(),
);

const loadJackpotsError = createAction(
  GamesActionType.LoadJackpotsError,
  props<{ error: any }>(),
);

const setFilters = createAction(
  GamesActionType.SetFilters,
  props<{ filters: GamesFilter[]}>(),
);

export const gamesActions = {
  loadGames,
  loadGamesSuccess,
  loadGamesError,

  loadJackpots,
  loadJackpotsSuccess,
  loadJackpotsError,

  setFilters,
};
