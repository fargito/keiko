import * as React from 'react';

import Pokemon from 'components/Pokemon';
import { RouteComponentProps } from 'react-router';

import { makeGetRequest } from 'services/networking/request';

import Style from './PokemonPage.style';

interface RouteParams {
  id: string;
}

interface Props extends RouteComponentProps<RouteParams> {
  name: string;
  height: number;
  weight: number;
  loading: boolean;
  error: string;
}

class PokemonPage extends React.Component<Props> {
  state = {
    id: parseInt(this.props.match.params.id),
    name: '',
    height: 0,
    weight: 0,
    loading: true,
    error: '',
  };
  componentDidMount() {
    makeGetRequest('/pokemon/' + String(this.state.id))
      .then(data => {
        const pokemon_data = JSON.parse(data['text']);
        this.setState({
          name: pokemon_data['name'],
          weight: pokemon_data['weight'],
          height: pokemon_data['height'],
          loading: false,
        });
      })
      .catch(error => {
        console.log(error);
        this.setState({ error: 'Unable to call poke API: ' + error.toString(), loading: false });
      });
  }

  render(): React.ReactNode {
    return (
      <Style.Intro>
        <div>
          {this.state.loading ? (
            'loading...'
          ) : this.state.error ? (
            <div>{this.state.error}</div>
          ) : (
            <Pokemon
              name={this.state.name}
              id={this.state.id}
              height={this.state.height}
              weight={this.state.weight}
            />
          )}
        </div>
      </Style.Intro>
    );
  }
}

export default PokemonPage;
