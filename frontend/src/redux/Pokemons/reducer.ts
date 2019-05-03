import { ActionType, getType } from 'typesafe-actions';

import { AnyAction } from 'redux';
import { pokemonType } from './types';
import { fetchPokemonsListSuccess, fetchPokemonSuccess } from './actions';

export type PokemonsAction = ActionType<
  typeof fetchPokemonsListSuccess | typeof fetchPokemonSuccess
>;

export type PokemonsState = Readonly<Record<string, pokemonType>>;

const initialState: PokemonsState = {};

const reducer = (state: PokemonsState = initialState, action: AnyAction) => {
  const typedAction = action as PokemonsAction;
  switch (typedAction.type) {
    case getType(fetchPokemonsListSuccess):
      return typedAction.payload.pokemons;
    case getType(fetchPokemonSuccess):
      return { ...state, [typedAction.payload.pokemon.id]: typedAction.payload.pokemon };
    default:
      return state;
  }
};

export default reducer;
