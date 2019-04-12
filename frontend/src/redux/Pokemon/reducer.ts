import { ActionType, getType } from 'typesafe-actions';

import { AnyAction } from 'redux';
import { PokemonType } from './types';
import {fetchPokemonsSuccess} from "redux/Pokemon/actions";

export type PokemonAction = ActionType<typeof fetchPokemonsSuccess>;

export type PokemonState = Readonly<Record<string, PokemonType>>;

const initialState: PokemonState = {};

const reducer = (state: PokemonState = initialState, action: AnyAction) => {
  return state;
};

export default reducer;
