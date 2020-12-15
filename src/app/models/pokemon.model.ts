import { Ability } from './ability.model';
import { Game } from './game.model';

export interface Pokemon {
    name: string;
    abilities: Ability[];
    game_indices: Game[];
    sprites: string[];
    types: {
        type: {
            name: string;
        }
    }[];
}
