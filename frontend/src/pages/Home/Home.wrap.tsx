import Home, { Props } from './Home';
import withFetchPokeAPI, { WithFetchAPIType } from '../../HOC/with-fetch-poke-api';
import { connect } from 'react-redux';
import { RootState } from 'redux/types';
import { Dispatch } from 'redux';
import { fetchPokemonsSuccess } from '../../redux/Pokemons/actions';
import { pokemonType } from 'redux/Pokemons/types';

const HomeWithFetchPokeAPI = withFetchPokeAPI<Props & WithFetchAPIType>(
  props => `/pokemon?page=${props.match.params.page}`,
  'pokemons',
  props => [props.match.params.page],
)(Home);

const getPokemonsFromState = (state: RootState, page: string) => {
  // for the moment, return all pokemon values in the state
  return Object.values(state.pokemons);
};

const mapStateToProps = (state: RootState, ownProps: Props) => {
  const { page } = ownProps.match.params;
  return { page, pokemons: getPokemonsFromState(state, page) };
};

const mapDispatchToProps = (dispatch: Dispatch) => {
  return {
    // dispatching plain actions
    fetchPokemonsSuccess: (pokemons: pokemonType[]) => {
      dispatch(fetchPokemonsSuccess({ pokemons: [] }));
    },
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(HomeWithFetchPokeAPI);
