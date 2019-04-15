import * as React from 'react';

// declare interface to type props
interface Props {
  name: string;
  id: number;
}

class Pokemon extends React.Component<Props> {
  render(): React.ReactNode {
    const pokemon = 'Carapuce';

    return (
      <div>
        <p>{this.props.name}</p>
        <p>Numéro {this.props.id}</p>
        <img src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/7.png"/>
      </div>
    );
  }
}

export default Pokemon;
