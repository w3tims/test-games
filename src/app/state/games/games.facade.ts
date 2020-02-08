import {Injectable} from "@angular/core";
import {IGamesState} from "./games.reducer";
import {Store} from "@ngrx/store";
import {gamesActions} from "./games.actions";
import {gamesSelectors} from "./games.selectors";
import {GamesFilter} from "../../features/games/types/games-filter.type";

@Injectable({
  providedIn: 'root',
})
export class GamesFacade {
  games$ = this.store.select(gamesSelectors.getAllGames);
  jackpots$ = this.store.select(gamesSelectors.getAllJackpots);
  activeGamesWithJackpots$ = this.store.select(gamesSelectors.getActiveGamesWithJackpots);

  loadGamesPending$ = this.store.select(gamesSelectors.getLoadGamesPending);
  loadGamesSuccess$ = this.store.select(gamesSelectors.getLoadGamesSuccess);
  loadGamesError$ = this.store.select(gamesSelectors.getLoadGamesError);

  loadJackpotsPending$ = this.store.select(gamesSelectors.getLoadJackpotsPending);
  loadJackpotsSuccess$ = this.store.select(gamesSelectors.getLoadJackpotsSuccess);
  loadJackpotsError$ = this.store.select(gamesSelectors.getLoadJackpotsError);

  constructor(
    private store: Store<IGamesState>,
  ) {
  }

  loadGames(): void {
    this.store.dispatch(gamesActions.loadGames());
  }

  loadJackpots(): void {
    this.store.dispatch(gamesActions.loadJackpots());
  }

  setFilters(filters: GamesFilter[]): void {
    this.store.dispatch(gamesActions.setFilters({ filters }));
  }
}
