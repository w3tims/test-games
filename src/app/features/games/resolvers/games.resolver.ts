import {Injectable} from "@angular/core";
import {Resolve} from "@angular/router";
import {GamesFacade} from "../../../state/games/games.facade";
import {interval, Observable} from "rxjs";
import {filter, first, switchMapTo, tap} from "rxjs/operators";
import {IGame} from "../types/game.interface";

@Injectable({
  providedIn: 'root',
})
export class GamesResolver implements Resolve<IGame[]> {
  constructor(
    private gamesFacade: GamesFacade,
  ) {
  }

  resolve(): Observable<IGame[]> {
    return this.gamesFacade.loadGamesSuccess$.pipe(
      tap((isLoaded) => {
        if (!isLoaded) {
          this.gamesFacade.loadGames()
        }
      }),
      filter(Boolean),
      switchMapTo(this.gamesFacade.games$),
      first(),
    )
  }
}
