import { normalize } from './PokemonsNormalizer';

describe('Pokemons normalizer', () => {
  it('should return an empty object when passed an empty list', () => {
    expect(normalize([])).toEqual({});
  });

  it('should should take a list of pokemons and return an object with each pokemon id as key', () => {
    const expectedNormalized = {
      91: { id: 91, name: 'cloyster', height: 15, weight: 1325 },
      92: { id: 92, name: 'gastly', height: 13, weight: 1 },
      93: { id: 93, name: 'haunter', height: 16, weight: 1 },
      94: { id: 94, name: 'gengar', height: 15, weight: 405 },
      95: { id: 95, name: 'onix', height: 88, weight: 2100 },
      96: { id: 96, name: 'drowzee', height: 10, weight: 324 },
      97: { id: 97, name: 'hypno', height: 16, weight: 756 },
    };
    const pokemonsList = Object.values(expectedNormalized);
    expect(normalize(pokemonsList)).toEqual(expectedNormalized);
  });
});
