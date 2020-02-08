import {Injectable} from "@angular/core";
import {Actions, createEffect, ofType} from "@ngrx/effects";
import {gamesActions} from "./games.actions";
import {catchError, map, switchMapTo} from "rxjs/operators";
import {of} from "rxjs";
import {GamesService} from "./games.service";

@Injectable({
  providedIn: 'root'
})
export class GamesEffects {

  loadGamesEffect$ = createEffect(
    () => this.actions$.pipe(
      ofType(gamesActions.loadGames),
      switchMapTo(
        this.gamesService.loadGames().pipe(
          map(games => {
            return gamesActions.loadGamesSuccess({ games });
          }),
          catchError(error => {
            return of(gamesActions.loadGamesError({ error }));
          })
        )
      )
    )
  );

  loadJackpotsEffect$ = createEffect(
    () => this.actions$.pipe(
      ofType(gamesActions.loadJackpots),
      switchMapTo(
        this.gamesService.loadJackpots().pipe(
          map(jackpots => {
            return gamesActions.loadJackpotsSuccess({ jackpots });
          }),
          catchError(error => {
            return of(gamesActions.loadJackpotsError({ error }));
          })
        )
      )
    )
  );

  constructor(
    private gamesService: GamesService,
    private actions$: Actions,
  ) {}

}
