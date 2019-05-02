import withFetchPokeAPI from '../../HOC/with-fetch-poke-api';
import PokemonPage, { Props } from './PokemonPage';
import { connect } from 'react-redux';
import { RootState } from 'redux/types';
import { getPokemonFromState } from 'redux/Pokemons/selectors';

// const PokemonPageWithPokeAPI = withFetchPokeAPI<Props>(
//   props => `/pokemon/${props.match.params.id}`,
//   'pokemon',
//   props => [props.match.params.id],
// )(PokemonPage);

const mapStateToProps = (state: RootState, ownProps: Props) => {
  const { id } = ownProps.match.params;
  return { id, pokemon: getPokemonFromState(state, id) };
};

export default connect(mapStateToProps)(PokemonPage);
