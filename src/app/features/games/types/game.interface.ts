import {GameCategory} from "./game-category.enum";

export interface IGame {
  id: string,
  name: string,
  categories: GameCategory[],
  image: string,
  jackpot?: number,
}
