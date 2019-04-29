import * as React from 'react';

import Style from './Pokemon.style';
import { Link } from 'react-router-dom';
import { useState } from 'react';

// declare interface to type props
interface Props {
  name: string;
  id: number;
  height: number;
  weight: number;
}

const api_img_url = 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/';
const api_img_back_url =
  'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/back/';

const Pokemon = (props: Props) => {
  const [viewedBack, setViewedBack] = useState(false);
  return (
    <Style.Outline>
      <Style.Pokemon>
        <Style.Header>
          <p />
          <Link
            to={'/pokemon/' + props.id}
            style={{ textDecoration: 'none', color: 'inherit' }}
            title="Voir les détails"
          >
            <p>{props.name}</p>
          </Link>
          <Style.PokemonRotate
            src={process.env.PUBLIC_URL + 'turn-ico.svg'}
            alt="rotate"
            title="Rotate pokemon"
            onClick={() => setViewedBack(!viewedBack)}
          />
        </Style.Header>
        <img
          src={(viewedBack ? api_img_back_url : api_img_url) + props.id + '.png'}
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
