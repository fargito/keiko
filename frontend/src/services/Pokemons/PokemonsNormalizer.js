export const normalize = pokemons => {
  return pokemons.reduce((aggreg, current) => {
    aggreg[current.id] = current;
    return aggreg;
  }, {});
};
