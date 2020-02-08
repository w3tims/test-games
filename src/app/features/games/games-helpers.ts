import {IGame} from "./types/game.interface";
import {IJackpot} from "./types/jackpot.interface";
import {GameCategory} from "./types/game-category.enum";
import {isArray} from "util";
import {GamesFilter} from "./types/games-filter.type";

export const setJackpotValues = (games: IGame[], jackpots: IJackpot[]): IGame[] => {
  return games.map(game => {
    const jackpot = jackpots.find(jackpot => {
      return game.id === jackpot.game ? jackpot.amount : null
    });
    return { ...game, jackpot: jackpot ? jackpot.amount : null};
  })
};

export const filterGamesByCategories = (games: IGame[], filterByCategories: GameCategory[]): IGame[] => {
  if (!filterByCategories || !filterByCategories.length) { return games }
  return games.filter(({ categories }) => {
    return categories.some(c => filterByCategories.includes(c))
  });
};

export const createCategoryFilter = (categories: GameCategory | GameCategory[]): GamesFilter => {
  const filterByCategories = isArray(categories) ? categories as GameCategory[] : [categories] as GameCategory[];
  return (games: IGame[]): IGame[] => {
    return filterGamesByCategories(games, filterByCategories);
  }
};

export const createJackpotFilter = (): GamesFilter => {
  return (games:IGame[]): IGame[] => {
    return games.filter(game => {
      return typeof game.jackpot === 'number';
    })
  }
};
