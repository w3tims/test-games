import {INavSection} from "./types/nav-item.interface";
import {createCategoryFilter, createJackpotFilter} from "./games-helpers";
import {GameCategory} from "./types/game-category.enum";

export const gamesNavigationSections: INavSection[] = [
  {
    route: '',
    title: 'All Games',
    filters: []
  },
  {
    route: 'top-games',
    title: 'Top Games',
    filters: [createCategoryFilter(GameCategory.TOP)]
  },
  {
    route: 'new-games',
    title: 'New Games',
    filters: [createCategoryFilter(GameCategory.NEW)]
  },
  {
    route: 'slots',
    title: 'Slots',
    filters: [createCategoryFilter(GameCategory.SLOTS)],
  },
  {
    route: 'jackpots',
    title: 'Jackpots',
    filters: [createJackpotFilter()],
  },
  {
    route: 'live',
    title: 'Live',
    filters: [createCategoryFilter('live' as GameCategory)], // 'live' category doesn't exist. should it be added? (?)
  },
  {
    route: 'blackjack',
    title: 'Blackjack',
    filters: [createCategoryFilter(GameCategory.BLACKJACK)],
  },
  {
    route: 'roulette',
    title: 'Roulette',
    filters: [createCategoryFilter(GameCategory.ROULETTE)],
  },
  {
    route: 'table',
    title: 'Table',
    filters: [createCategoryFilter('table' as GameCategory)], // 'table' category doesn't exist. . should it be added? (?)
  },
  {
    route: 'poker',
    title: 'Poker',
    filters: [createCategoryFilter(GameCategory.POKER)],
  },
  {
    route: 'other',
    title: 'Other',
    filters: [createCategoryFilter([GameCategory.BALL, GameCategory.VIRTUAL, GameCategory.FUN])],
  },
];
