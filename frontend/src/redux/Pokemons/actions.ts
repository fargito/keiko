import { createStandardAction } from 'typesafe-actions';
import { pokemonType } from './types';

export const fetchPokemonsSuccess = createStandardAction('Pokemons/FETCH_POKEMONS_SUCCESS')<{
  pokemons: {};
}>();
export const fetchPokemonSuccess = createStandardAction('Pokemons/FETCH_POKEMON_SUCCESS')<{
  pokemon: pokemonType;
}>();

export default {
  fetchPokemonsSuccess,
};
