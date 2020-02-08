import {Component, Input} from '@angular/core';
import {IGame} from "../../types/game.interface";
import {GameCategory} from "../../types/game-category.enum";
import {RouterFacade} from "../../../../state/router/router.facade";
import {Observable} from "rxjs";
import {INavSection} from "../../types/nav-item.interface";

@Component({
  selector: 'app-game-preview',
  templateUrl: './game-preview.component.html',
  styleUrls: ['./game-preview.component.scss']
})
export class GamePreviewComponent {
  @Input() game: IGame;
  navSection$: Observable<INavSection> = this.routerFacade.navSection$;

  constructor(
    private routerFacade: RouterFacade,
  ) {
  }

  shopTop(currentNavSection: INavSection): boolean {
    return this.game.categories.includes(GameCategory.TOP) && currentNavSection.route !== 'top-games';
  }

  showNew(currentNavSection: INavSection): boolean {
    return this.game.categories.includes(GameCategory.NEW) && currentNavSection.route !== 'new-games';
  }

}
