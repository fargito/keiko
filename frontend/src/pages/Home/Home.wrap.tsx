import withDataFetching from 'HOC/withDataFetching';
import * as React from 'react';
import { connect } from 'react-redux';
import { fetchPokemonsSuccess } from 'redux/Pokemon/actions';
import {PokemonType} from "redux/Pokemon/types";
import { RootState } from 'redux/types';
import { makeGetRequest } from 'services/networking/request';
import Home, { Props } from './Home';

const mapStateToProps = (state: RootState) => ({
  pokemons: Object.values(state.pokemon),
});

const mapDispatchToProps = {
    fetchPokemonsSuccess,
};

export default connect(mapStateToProps, mapDispatchToProps)(
  withDataFetching<Props>(
      'pokemonsbla',
      (props: Props) => makeGetRequest('/pokemon', {page: props.match.params.page}),
      (props: Props) => [props.match.params.page],
      (props: Props, data: PokemonType[]) => props.fetchPokemonsSuccess({pokemons: data})
      )(Home)
    ,
);
