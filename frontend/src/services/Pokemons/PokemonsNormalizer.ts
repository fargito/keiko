import { pokemonType } from 'redux/Pokemons/types';

export const normalize = (pokemons: pokemonType[]) => {
  const initialReturn: { [key: string]: pokemonType } = {};
  return pokemons.reduce((aggreg, current) => {
    aggreg[current.id] = current;
    return aggreg;
  }, initialReturn);
};
