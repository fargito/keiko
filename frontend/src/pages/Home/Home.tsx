import * as React from 'react';

import { RouteComponentProps } from 'react-router';
import { PokemonAction } from "redux/Pokemon";
import Style from './Home.style';

interface RouteParams {
  page: string;
}

interface Pokemon {
  id: number;
  name: string;
  weight: number;
  height: number;
}

export interface Props extends RouteComponentProps<RouteParams> {
  pokemons: Pokemon[];
  fetchPokemonsSuccess: PokemonAction;
}

const Home = (props: Props) => {
  const page = parseInt(props.match.params.page);
  const { pokemons } = props;

  return (
    <Style.Wrapper>
      <Style.Title>Pokedex</Style.Title>
      <Style.PageLinkWrapper>
        {page > 1 && <Style.PageLink to={`/pokedex/${page - 1}`}>&lt;</Style.PageLink>}
        <Style.PageLink to={`/pokedex/${page + 1}`}>&gt;</Style.PageLink>
      </Style.PageLinkWrapper>
      <Style.PokemonsWrapper>
        {!!pokemons.length &&
          pokemons.map(({ name, id, height, weight }) => (
            <Style.Pokemon name={name} weight={weight} height={height} id={id} key={id} />
          ))}
      </Style.PokemonsWrapper>
    </Style.Wrapper>
  );
};

export default Home;
