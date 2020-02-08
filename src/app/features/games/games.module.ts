import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {GamesPageComponent} from "./layout/games-page.component";
import {GamesRoutingModule} from "./games-routing.module";
import { GamePreviewComponent } from './components/game-preview/game-preview.component';



@NgModule({
  declarations: [
    GamesPageComponent,
    GamePreviewComponent
  ],
  imports: [
    CommonModule,
    GamesRoutingModule,
  ]
})
export class GamesModule { }
