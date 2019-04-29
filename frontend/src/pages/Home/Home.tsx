import * as React from 'react';

import Pokemon from 'components/Pokemon';

import { makeGetRequest } from 'services/networking/request';

import Style from './Home.style';
import { Link } from 'react-router-dom';

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
    makeGetRequest('/pokemon')
      .then(data => {
        this.setState({ pokemons: JSON.parse(data['text']), loading: false });
      })
      .catch(error => {
        this.setState({ error: 'Unable to call poke API: ' + error.toString(), loading: false });
      });
  }

  render(): React.ReactNode {
    return (
      <Style.Intro>
        <div>Pokédex !</div>

        <div>
          {this.state.loading ? (
            <img src={process.env.PUBLIC_URL + 'loader.svg'} alt="loading..." />
          ) : this.state.error ? (
            <div>{this.state.error}</div>
          ) : (
            this.state.pokemons.map((value, index) => (
              <Link to={'/pokemon/' + value.id}>
                <Pokemon
                  name={value.name}
                  id={value.id}
                  height={value.height}
                  weight={value.weight}
                />
              </Link>
            ))
          )}
        </div>
      </Style.Intro>
    );
  }
}

export default Home;
