import {adapter, IGamesState} from "./games.reducer";
import {createFeatureSelector, createSelector} from "@ngrx/store";
import {StoreKey} from "../state.module";
import {filterGamesByCategories, setJackpotValues} from "../../features/games/games-helpers";
import {IGame} from "../../features/games/types/game.interface";
import {GamesFilter} from "../../features/games/types/games-filter.type";

const {
  selectAll,
} = adapter.getSelectors();

const getGamesState = createFeatureSelector<IGamesState>(StoreKey.GAMES);

const getAllGames = createSelector(
  getGamesState,
  selectAll,
);

const getAllJackpots = createSelector(
  getGamesState,
  state => state.jackpots,
);

const getAllGamesWithJackpots = createSelector(
  getAllGames,
  getAllJackpots,
  setJackpotValues,
);

const getFilters = createSelector(
  getGamesState,
  state => state.filters
);

const getFilteredGamesWithJackpots = createSelector(
  getAllGamesWithJackpots,
  getFilters,
  (games, filters) => {
    return filters.reduce((gamesToFilter, currentFilter) => {
      return currentFilter(gamesToFilter);
    }, games)
  },
);

const getLoadGamesPending = createSelector(
  getGamesState,
  state => state.loadGamesPending,
);

const getLoadGamesSuccess = createSelector(
  getGamesState,
  state => state.loadGamesSuccess,
);

const getLoadGamesError = createSelector(
  getGamesState,
  state => state.loadGamesError,
);


const getLoadJackpotsPending = createSelector(
  getGamesState,
  state => state.loadJackpotsPending,
);

const getLoadJackpotsSuccess = createSelector(
  getGamesState,
  state => state.loadJackpotsSuccess,
);

const getLoadJackpotsError = createSelector(
  getGamesState,
  state => state.loadJackpotsError,
);


export const gamesSelectors = {
  getAllGames,
  getAllJackpots,
  getActiveGamesWithJackpots: getFilteredGamesWithJackpots,

  getLoadGamesPending,
  getLoadGamesSuccess,
  getLoadGamesError,

  getLoadJackpotsPending,
  getLoadJackpotsSuccess,
  getLoadJackpotsError,
};
