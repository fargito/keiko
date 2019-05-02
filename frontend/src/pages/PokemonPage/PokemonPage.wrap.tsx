import withFetchPokeAPI from '../../HOC/with-fetch-poke-api';
import PokemonPage, { Props } from './PokemonPage';
import { connect } from 'react-redux';
import { RootState } from 'redux/types';

const PokemonPageWithPokeAPI = withFetchPokeAPI<Props>(
  props => `/pokemon/${props.match.params.id}`,
  'pokemon',
  props => [props.match.params.id],
)(PokemonPage);

const getPokemonFromState = (state: RootState, id: string) => {
  // temporary check that the pokemon exists in the current app state
  const pokemon = state.pokemons[id];
  if (pokemon === undefined) {
    return { id: 1000, name: 'Inconnu', height: 0, weight: 0 };
  }
  return pokemon;
};

const mapStateToProps = (state: RootState, ownProps: Props) => {
  const { id } = ownProps.match.params;
  return { id, pokemon: getPokemonFromState(state, id) };
};

export default connect(mapStateToProps)(PokemonPage);
