import {GamesFilter} from "./games-filter.type";

export interface INavSection {
  route: string,
  title: string,
  filters: GamesFilter[],
}
