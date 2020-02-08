import {Injectable} from "@angular/core";
import {Resolve} from "@angular/router";
import {IJackpot} from "../types/jackpot.interface";
import {GamesFacade} from "../../../state/games/games.facade";
import {Observable} from "rxjs";
import {filter, first, switchMapTo, tap} from "rxjs/operators";

@Injectable({
  providedIn: 'root',
})
export class JackpotsResolver implements Resolve<IJackpot[]> {
  constructor(
    private gamesFacade: GamesFacade,
  ) {
  }

  resolve(): Observable<IJackpot[]> {
    return this.gamesFacade.loadJackpotsSuccess$.pipe(
      tap((isLoaded) => {
        if (!isLoaded) {
          this.gamesFacade.loadJackpots()
        }
      }),
      filter(Boolean),
      switchMapTo(this.gamesFacade.jackpots$),
      first(),
    )
  }
}
