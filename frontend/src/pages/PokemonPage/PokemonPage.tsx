import * as React from 'react';

import Pokemon from 'components/Pokemon';
import { RouteComponentProps } from 'react-router';

import Style from './PokemonPage.style';
import { pokemonType } from 'redux/Pokemons/types';

interface RouteParams {
  id: string;
}

export interface Props extends RouteComponentProps<RouteParams> {
  pokemon: pokemonType;
}

const PokemonPage = (props: Props) => {
  return (
    <Style.Intro>
      <Pokemon
        name={props.pokemon.name}
        id={props.pokemon.id}
        height={props.pokemon.height}
        weight={props.pokemon.weight}
      />
    </Style.Intro>
  );
};

export default PokemonPage;
