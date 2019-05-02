import { ActionType, getType } from 'typesafe-actions';

import { AnyAction } from 'redux';

import { PokemonData } from '../../HOC/with-fetch-poke-api';

export type PokemonsState = Readonly<{
  [key: string]: PokemonData;
}>;

const initialState: PokemonsState = { '2': { id: 2, name: 'blob', weight: 0, height: 0 } };

const reducer = (state: PokemonsState = initialState, action: AnyAction) => {
  return state;
};

export default reducer;
