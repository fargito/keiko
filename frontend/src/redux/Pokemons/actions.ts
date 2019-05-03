import { createStandardAction } from 'typesafe-actions';
import { pokemonType } from './types';

export const fetchPokemonsListSuccess = createStandardAction(
  'Pokemons/FETCH_POKEMONS_LIST_SUCCESS',
)<{
  pokemons: {};
}>();
export const fetchPokemonSuccess = createStandardAction('Pokemons/FETCH_POKEMON_SUCCESS')<{
  pokemon: pokemonType;
}>();

export default {
  fetchPokemonsListSuccess,
};
