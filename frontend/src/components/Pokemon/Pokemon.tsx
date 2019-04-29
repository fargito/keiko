import * as React from 'react';

import Style from './Pokemon.style';

// declare interface to type props
interface Props {
  name: string;
  id: number;
  height: number;
  weight: number;
}

const api_img_url = 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/';

const Pokemon = (props: Props) => (
  <Style.Outline>
    <Style.Pokemon>
      <p>{props.name}</p>
      <img src={api_img_url + props.id + '.png'} />
      <p>Id: {props.id}</p>
      <p>Weight: {props.weight} kg</p>
      <p>Height: {props.height} cm</p>
    </Style.Pokemon>
  </Style.Outline>
);

export default Pokemon;
