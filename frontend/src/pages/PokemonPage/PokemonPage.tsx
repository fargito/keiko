import * as React from 'react';

import Pokemon from 'components/Pokemon';
import { RouteComponentProps } from 'react-router';

import { makeGetRequest } from 'services/networking/request';

import Style from './PokemonPage.style';
import loader from './../../assets/loader.svg';

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
    makeGetRequest(`/pokemon/${this.state.id}`)
      .then(data => {
        const pokemonData = data.body;
        this.setState({
          name: pokemonData['name'],
          weight: pokemonData['weight'],
          height: pokemonData['height'],
          loading: false,
        });
      })
      .catch(error => {
        this.setState({ error: 'Unable to call poke API: ' + error.toString(), loading: false });
      });
  }

  render(): React.ReactNode {
    return (
      <Style.Intro>
        <div>
          {this.state.loading ? (
            <img src={loader} alt="loading..." />

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
