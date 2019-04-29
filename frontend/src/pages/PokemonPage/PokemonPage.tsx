import * as React from 'react';

import Pokemon from 'components/Pokemon';
import { RouteComponentProps } from 'react-router';

import {makeGetRequest} from 'services/networking/request';

import Style from './PokemonPage.style';

interface RouteParams {
  id: string;
}

interface Props extends RouteComponentProps<RouteParams> {}


class PokemonPage extends React.Component<Props> {
  state = {id: parseInt(this.props.match.params.id)}

  // constructor(props: object) {
  //   super(props)
  // }


  // componentDidMount() {
  //   console.log("mounted")
  //   makeGetRequest("/pokemon").then(
  //       (data) => {
  //         this.setState({pokemons: JSON.parse(data['text']), loading: false});
  //       }
  //     )
  //     .catch(
  //       () => {
  //         this.setState({error: "Unable to call poke API", loading: false})
  //       }
  //     )
  // }



  render(): React.ReactNode {
    return (
      <Style.Intro>
        <div>Pokémon page ! {this.state.id}</div>
      </Style.Intro>
    );
  }
}

export default PokemonPage;
