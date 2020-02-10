import {Component, OnDestroy, OnInit} from '@angular/core';
import {GamesFacade} from "../../../state/games/games.facade";
import {gamesNavigationSections} from "../games-navigation-sections";
import {Router} from "@angular/router";
import {RouterFacade} from "../../../state/router/router.facade";
import {interval, Subscription} from "rxjs";
import {tap} from "rxjs/operators";

@Component({
  selector: 'app-games-page',
  templateUrl: './games-page.component.html',
  styleUrls: ['./games-page.component.scss']
})
export class GamesPageComponent implements OnInit, OnDestroy {
  activeGamesWithJackpots$ = this.gamesFacade.activeGamesWithJackpots$;
  navSections = gamesNavigationSections;

  subs: Subscription[] = [];

  ngOnInit(): void {
    // todo move to effects
    this.routerFacade.navSection$.subscribe(navSection => {
      this.gamesFacade.setFilters(navSection.filters);
    });

    // TODO re-loadJackpots in resolvers ?
    // temporary dirty fix:
    this.subs.push(
      interval(5000)
        .pipe(
          tap(() => this.gamesFacade.loadJackpots())
        ).subscribe()
    );
  }

  ngOnDestroy(): void {
    this.subs.forEach(sub => sub.unsubscribe());
  }

  constructor(
    private gamesFacade: GamesFacade,
    private routerFacade: RouterFacade,
    private router: Router,
  ) {
  }
}
