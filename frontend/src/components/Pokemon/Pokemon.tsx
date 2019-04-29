import * as React from 'react';

import Style from './Pokemon.style';
import { useState } from 'react';

import rotateIcon from './../../assets/turn-ico.svg';

// declare interface to type props
interface Props {
  name: string;
  id: number;
  height: number;
  weight: number;
}

const apiImgUrl = 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/';
const apiImgBackUrl =
  'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/back/';

const Pokemon = (props: Props) => {
  const [viewedBack, setViewedBack] = useState(false);
  return (
    <Style.Outline>
      <Style.Pokemon>
        <Style.Header>
          <p />
          <Style.PokemonDetailsLink to={`/pokemon/${props.id}`} title="Voir les détails">
            <p>{props.name}</p>
          </Style.PokemonDetailsLink>
          <Style.PokemonRotate
            src={rotateIcon}
            alt="rotate"
            title="Rotate pokemon"
            onClick={() => setViewedBack(!viewedBack)}
          />
        </Style.Header>
        <img
          src={(viewedBack ? apiImgBackUrl : apiImgUrl) + props.id + '.png'}
          alt={props.name + ' cool PP !!!'}
        />
        <p>Id: {props.id}</p>
        <p>Weight: {props.weight} kg</p>
        <p>Height: {props.height} cm</p>
      </Style.Pokemon>
    </Style.Outline>
  );
};

export default Pokemon;
