import { createStandardAction } from 'typesafe-actions';
import { PokemonsState } from './reducer';

export const fetchPokemonsRequest = createStandardAction('Pokemons/FETCH_POKEMONS_REQUEST')<{
  pokemons: PokemonsState[];
}>();
export const fetchPokemonsSuccess = createStandardAction('Pokemons/FETCH_POKEMONS_SUCCESS')<{
  pokemons: PokemonsState[];
}>();
export const fetchPokemonsError = createStandardAction('Pokemons/FETCH_POKEMONS_ERROR')<{
  errorMessage: string;
}>();

export default {
  fetchPokemonsRequest,
  fetchPokemonsSuccess,
  fetchPokemonsError,
};
