import { fetchPokemonsSuccess, fetchPokemonSuccess } from '../actions';
import reducer from '../reducer';

const initialState = {};

const fetchedPokemons = {
  91: { id: 91, name: 'cloyster', height: 15, weight: 1325 },
  92: { id: 92, name: 'gastly', height: 13, weight: 1 },
  93: { id: 93, name: 'haunter', height: 16, weight: 1 },
  94: { id: 94, name: 'gengar', height: 15, weight: 405 },
  95: { id: 95, name: 'onix', height: 88, weight: 2100 },
  96: { id: 96, name: 'drowzee', height: 10, weight: 324 },
  97: { id: 97, name: 'hypno', height: 16, weight: 756 },
};

describe('Pokemons reducer', () => {
  describe('FETCH_POKEMONS_SUCCESS case', () => {
    it('Should add the pokemons from the action to the state', () => {
      const action = fetchPokemonsSuccess({
        pokemons: fetchedPokemons,
      });
      const expectedState = fetchedPokemons;
      expect(reducer(initialState, action)).toEqual(expectedState);
    });
  });
  describe('FETCH_POKEMON_SUCCESS case', () => {
    it('Should add one pokemon from the action to the state', () => {
      const pokemonID = 91;
      const action = fetchPokemonSuccess({
        pokemon: fetchedPokemons[91],
      });
      const expectedState = { 91: fetchedPokemons[91] };
      expect(reducer(initialState, action)).toEqual(expectedState);
    });
  });
});
