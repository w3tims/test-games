import {IGame} from "./game.interface";

export type GamesFilter = (games: IGame[]) => IGame[];

