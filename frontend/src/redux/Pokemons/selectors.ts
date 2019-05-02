import { RootState } from 'redux/types';

export const getPokemonFromState = (state: RootState, id: string) => {
  // temporary check that the pokemon exists in the current app state
  const pokemon = state.pokemons[id];
  return pokemon;
};

export const getPokemonsListFromState = (state: RootState, page: string) => {
  // for the moment, return all pokemon values in the state
  return Object.values(state.pokemons);
};
