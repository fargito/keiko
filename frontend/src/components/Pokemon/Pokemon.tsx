import * as React from 'react';

import Style from './Pokemon.style';
import { useState } from 'react';

import rotateIcon from './turn-ico.svg';
import { pokemonType } from 'redux/Pokemons/types';
import ErrorDisplayer from 'components/ErrorDisplayer';

// declare interface to type props
interface Props {
  pokemon: pokemonType;
}

const apiImgUrl = 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/';
const apiImgBackUrl =
  'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/back/';

const Pokemon = (props: Props) => {
  const [viewedBack, setViewedBack] = useState(false);
  return (
    <p>
      {props.pokemon === undefined ? (
        <ErrorDisplayer error="pokemon is undefined" />
      ) : (
        <Style.Outline>
          <Style.Pokemon>
            <Style.Header>
              <p />
              <Style.PokemonDetailsLink
                to={`/pokemon/${props.pokemon.id}`}
                title="Voir les détails"
              >
                <p>{props.pokemon.name}</p>
              </Style.PokemonDetailsLink>
              <Style.PokemonRotate
                src={rotateIcon}
                alt="rotate"
                title="Rotate pokemon"
                onClick={() => setViewedBack(!viewedBack)}
              />
            </Style.Header>
            <img
              src={`${viewedBack ? apiImgBackUrl : apiImgUrl}${props.pokemon.id}.png`}
              alt={props.pokemon.name}
            />
            <p>Id: {props.pokemon.id}</p>
            <p>Weight: {props.pokemon.weight} kg</p>
            <p>Height: {props.pokemon.height} cm</p>
          </Style.Pokemon>
        </Style.Outline>
      )}
    </p>
  );
};

export default Pokemon;
