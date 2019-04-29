import * as React from 'react';

import Pokemon from 'components/Pokemon';

import { makeGetRequest } from 'services/networking/request';

import Style from './Home.style';

interface Props {}
interface State {
  pokemons: {
    id: number;
    name: string;
    height: number;
    weight: number;
  }[];
  loading: boolean;
  error: string;
}

class Home extends React.Component<Props, State> {
  constructor(props: object) {
    super(props);
    this.state = {
      pokemons: [],
      loading: true,
      error: '',
    };
  }

  componentDidMount() {
    console.log('mounted');
    makeGetRequest('/pokemon')
      .then(data => {
        this.setState({ pokemons: JSON.parse(data['text']), loading: false });
      })
      .catch(error => {
        this.setState({ error: error.toString(), loading: false });
      });
  }

  render(): React.ReactNode {
    return (
      <Style.Intro>
        <div>Pokédex !</div>
        <div>{this.state.error}</div>
        <div>
          {this.state.loading
            ? 'loading...'
            : this.state.pokemons.map((value, index) => (
                <Pokemon
                  name={value.name}
                  id={value.id}
                  height={value.height}
                  weight={value.weight}
                />
              ))}
        </div>
      </Style.Intro>
    );
  }
}

export default Home;
