import { Ability } from './ability.model';
import { Game } from './game.model';

export interface Pokemon {
    name: string;
    abilities: Ability[];
    game_indices: Game[];
    sprite: string;
    types: {
        type: {
            name: string;
        }
    }[];
}
