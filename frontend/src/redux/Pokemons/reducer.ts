import { ActionType, getType } from 'typesafe-actions';

import { AnyAction } from 'redux';
import { pokemonType } from './types';

export type PokemonsState = Readonly<Record<string, pokemonType>>;

const initialState: PokemonsState = {};

const reducer = (state: PokemonsState = initialState, action: AnyAction) => {
  return state;
};

export default reducer;
