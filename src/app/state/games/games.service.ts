import {Injectable} from "@angular/core";
import {IGame} from "../../features/games/types/game.interface";
import {Observable} from "rxjs";
import {HttpClient} from "@angular/common/http";
import {IJackpot} from "../../features/games/types/jackpot.interface";

@Injectable({
  providedIn: 'root',
})

export class GamesService {

  constructor(
    private http: HttpClient
  ) {
  }

  loadGames(): Observable<IGame[]> {
    return this.http.get('http://stage.whgstage.com/front-end-test/games.php') as Observable<IGame[]>
  }

  loadJackpots(): Observable<IJackpot[]> {
    return this.http.get('http://stage.whgstage.com/front-end-test/jackpots.php') as Observable<IJackpot[]>
  }
}
