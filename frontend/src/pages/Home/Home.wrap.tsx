import Home, { Props } from './Home';
import withFetchPokeAPI from '../../HOC/with-fetch-poke-api';
import { connect } from 'react-redux';
import { RootState } from 'redux/types';
import { PokemonsState } from 'redux/Pokemons';
import { Dispatch } from 'redux';
import { fetchPokemonsRequest } from '../../redux/Pokemons/actions';

const HomeWithFetchPokeAPI = withFetchPokeAPI<Props>(
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
    fetchPokemons: () => {
      dispatch(fetchPokemonsRequest({ pokemons: [] }));
    },
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(Home);
