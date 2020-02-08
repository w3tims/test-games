import {Component, OnInit} from '@angular/core';
import {GamesFacade} from "../../../state/games/games.facade";
import {GameCategory} from "../types/game-category.enum";
import {createCategoryFilter} from "../games-helpers";
import {INavSection} from "../types/nav-item.interface";
import {gamesNavigationSections} from "../games-navigation-sections";
import {Router, RoutesRecognized} from "@angular/router";
import {RouterFacade} from "../../../state/router/router.facade";
import { isEqual } from 'lodash';

@Component({
  selector: 'app-games-page',
  templateUrl: './games-page.component.html',
  styleUrls: ['./games-page.component.scss']
})
export class GamesPageComponent implements OnInit {
  activeGamesWithJackpots$ = this.gamesFacade.activeGamesWithJackpots$;
  navSections = gamesNavigationSections;

  ngOnInit(): void {
    // todo move to effects
    this.routerFacade.navSection$.subscribe(navSection => {
      this.gamesFacade.setFilters(navSection.filters);
    });
  }

  constructor(
    private gamesFacade: GamesFacade,
    private routerFacade: RouterFacade,
    private router: Router,
  ) {
  }
}
