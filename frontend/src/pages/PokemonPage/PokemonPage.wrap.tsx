import withFetchPokeAPI, { WithFetchAPIType } from '../../HOC/with-fetch-poke-api';
import PokemonPage, { Props } from './PokemonPage';
import { connect } from 'react-redux';
import { RootState } from 'redux/types';
import { getPokemonFromState } from 'redux/Pokemons/selectors';
import { fetchPokemonSuccess } from 'redux/Pokemons/actions';
import { Dispatch } from 'redux';
import { pokemonType } from 'redux/Pokemons/types';

const PokemonPageWithPokeAPI = withFetchPokeAPI<Props & WithFetchAPIType>(
  props => `/pokemon/${props.match.params.id}`,
  'pokemon',
  props => [props.match.params.id],
)(PokemonPage);

const mapStateToProps = (state: RootState, ownProps: Props) => {
  const { id } = ownProps.match.params;
  return { pokemon: getPokemonFromState(state, id) };
};

const mapDispatchToProps = (dispatch: Dispatch) => {
  return {
    // dispatching plain actions
    fetchPokemonsListSuccess: (pokemon: pokemonType) => {
      dispatch(fetchPokemonSuccess({ pokemon }));
    },
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(PokemonPageWithPokeAPI);
