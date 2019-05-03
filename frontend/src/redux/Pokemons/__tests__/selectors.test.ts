import { state } from '__fixtures__/state';
import { getPokemonFromState, getPokemonsListFromState } from '../selectors';
import { RootState } from 'redux/types';

const initialState = {
  ...state,
  pokemons: {
    91: { id: 91, name: 'cloyster', height: 15, weight: 1325 },
    92: { id: 92, name: 'gastly', height: 13, weight: 1 },
    93: { id: 93, name: 'haunter', height: 16, weight: 1 },
    94: { id: 94, name: 'gengar', height: 15, weight: 405 },
    95: { id: 95, name: 'onix', height: 88, weight: 2100 },
    96: { id: 96, name: 'drowzee', height: 10, weight: 324 },
    97: { id: 97, name: 'hypno', height: 16, weight: 756 },
  },
};

const pokemonsList = [
  { id: 91, name: 'cloyster', height: 15, weight: 1325 },
  { id: 92, name: 'gastly', height: 13, weight: 1 },
  { id: 93, name: 'haunter', height: 16, weight: 1 },
  { id: 94, name: 'gengar', height: 15, weight: 405 },
  { id: 95, name: 'onix', height: 88, weight: 2100 },
  { id: 96, name: 'drowzee', height: 10, weight: 324 },
  { id: 97, name: 'hypno', height: 16, weight: 756 },
];

describe('Pokemons selectors', () => {
  describe('getPokemonFromState function', () => {
    it('should return undefined when the requested pokemon is not in the store', () => {
      expect(getPokemonFromState(initialState, '100')).toEqual(undefined);
    });
    it('should return a pokemon object from the store when the request pokemon is in the store', () => {
      expect(getPokemonFromState(initialState, '92')).toEqual({
        id: 92,
        name: 'gastly',
        height: 13,
        weight: 1,
      });
    });
  });
  describe('getPokemonsListFromState funtion', () => {
    it('should return a list of all the pokemons in the store', () => {
      expect(getPokemonsListFromState(initialState, '1')).toEqual(pokemonsList);
    });
  });
});
