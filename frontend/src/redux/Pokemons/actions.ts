import { createStandardAction } from 'typesafe-actions';
import { PokemonsState } from './reducer';

export const fetchPokemonsSuccess = createStandardAction('Pokemons/FETCH_POKEMONS_SUCCESS')<{
  pokemons: {};
}>();

export default {
  fetchPokemonsSuccess,
};
