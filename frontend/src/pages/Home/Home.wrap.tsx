import Home, { Props } from './Home';
import withFetchPokeAPI, { WithFetchAPIType } from '../../HOC/with-fetch-poke-api';
import { connect } from 'react-redux';
import { RootState } from 'redux/types';
import { Dispatch } from 'redux';
import { fetchPokemonsSuccess } from '../../redux/Pokemons/actions';
import { pokemonType } from 'redux/Pokemons/types';
import { getPokemonsListFromState } from 'redux/Pokemons/selectors';
import { normalize } from 'services/Pokemons/PokemonsNormalizer';

const HomeWithFetchPokeAPI = withFetchPokeAPI<Props & WithFetchAPIType>(
  props => `/pokemon?page=${props.match.params.page}`,
  'pokemons',
  props => [props.match.params.page],
)(Home);

const mapStateToProps = (state: RootState, ownProps: Props) => {
  const { page } = ownProps.match.params;
  return { pokemons: getPokemonsListFromState(state, page) };
};

const mapDispatchToProps = (dispatch: Dispatch) => {
  return {
    // dispatching plain actions
    fetchPokemonsSuccess: (pokemons: pokemonType[]) => {
      dispatch(fetchPokemonsSuccess({ pokemons: normalize(pokemons) }));
    },
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(HomeWithFetchPokeAPI);
