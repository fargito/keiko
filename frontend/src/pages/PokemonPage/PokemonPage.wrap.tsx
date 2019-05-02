import withFetchPokeAPI from '../../HOC/with-fetch-poke-api';
import PokemonPage, { Props } from './PokemonPage';

export default withFetchPokeAPI<Props>(
  props => `/pokemon/${props.match.params.id}`,
  'pokemon',
  props => [props.match.params.id],
)(PokemonPage);
