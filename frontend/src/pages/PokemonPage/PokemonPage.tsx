import * as React from 'react';

import Pokemon from 'components/Pokemon';
import { RouteComponentProps } from 'react-router';

import { PokemonData } from '../../HOC/with-fetch-poke-api';

import Style from './PokemonPage.style';

interface RouteParams {
  id: string;
}

export interface Props extends RouteComponentProps<RouteParams> {
  pokemon: PokemonData;
  error: string;
}

const PokemonPage = (props: Props) => {
  return (
    <Style.Intro>
      <div>
        {props.error ? (
          <div>{props.error}</div>
        ) : (
          <Pokemon
            name={props.pokemon.name}
            id={props.pokemon.id}
            height={props.pokemon.height}
            weight={props.pokemon.weight}
          />
        )}
      </div>
    </Style.Intro>
  );
};

export default PokemonPage;
