import { ActionType, getType } from 'typesafe-actions';

import { AnyAction } from 'redux';
import { pokemonType } from './types';
import { fetchPokemonsSuccess, fetchPokemonSuccess } from './actions';

export type PokemonsAction = ActionType<typeof fetchPokemonsSuccess | typeof fetchPokemonSuccess>;

export type PokemonsState = Readonly<Record<string, pokemonType>>;

const initialState: PokemonsState = {};

const reducer = (state: PokemonsState = initialState, action: AnyAction) => {
  const typedAction = action as PokemonsAction;
  switch (typedAction.type) {
    case getType(fetchPokemonsSuccess):
      return typedAction.payload.pokemons;
    case getType(fetchPokemonSuccess):
      const newState = { ...state };
      newState[typedAction.payload.pokemon.id] = typedAction.payload.pokemon;
      return newState;
    default:
      return state;
  }
};

export default reducer;
