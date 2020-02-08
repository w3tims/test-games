import {RouterModule, Routes} from '@angular/router';
import {NgModule} from '@angular/core';
import {GamesPageComponent} from "./layout/games-page.component";
import {gamesNavigationSections} from "./games-navigation-sections";

const navigationSectionsRoutes: Routes = gamesNavigationSections.map(navSection => {
  return {
    path: navSection.route,
    component: GamesPageComponent,
    data: navSection,
  }
});

@NgModule({
  imports: [
    RouterModule.forChild(navigationSectionsRoutes)
  ],
  exports: [
    RouterModule
  ]
})
export class GamesRoutingModule { }
