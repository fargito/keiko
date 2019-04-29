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

class Pokemon extends React.Component<Props> {
  render(): React.ReactNode {
    return (
      <Style.Outline>
        <Style.Pokemon>
          <p>{this.props.name}</p>
          <img src={api_img_url + this.props.id + '.png'} />
          <p>Id: {this.props.id}</p>
          <p>Weight: {this.props.weight} kg</p>
          <p>Height: {this.props.height} cm</p>
        </Style.Pokemon>
      </Style.Outline>
    );
  }
}

export default Pokemon;
