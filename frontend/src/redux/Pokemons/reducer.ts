import { ActionType, getType } from 'typesafe-actions';

import { AnyAction } from 'redux';
import { pokemonType } from './types';

export type PokemonsState = Readonly<Record<string, pokemonType>>;

const initialState: PokemonsState = {
  91: { id: 91, name: 'cloyster', height: 15, weight: 1325 },
  92: { id: 92, name: 'gastly', height: 13, weight: 1 },
  93: { id: 93, name: 'haunter', height: 16, weight: 1 },
  94: { id: 94, name: 'gengar', height: 15, weight: 405 },
  95: { id: 95, name: 'onix', height: 88, weight: 2100 },
  96: { id: 96, name: 'drowzee', height: 10, weight: 324 },
  97: { id: 97, name: 'hypno', height: 16, weight: 756 },
};

const reducer = (state: PokemonsState = initialState, action: AnyAction) => {
  return state;
};

export default reducer;
