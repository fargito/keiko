import Home, { Props } from './Home';
import withFetchPokeAPI from '../../HOC/with-fetch-poke-api';

export default withFetchPokeAPI<Props>(
  props => `/pokemon?page=${props.match.params.page}`,
  'pokemons',
  props => [props.match.params.page],
)(Home);
