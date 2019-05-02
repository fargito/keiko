import * as React from 'react';

import Pokemon from 'components/Pokemon';

import Style from './Home.style';
import { useEffect } from 'react';
import { RouteComponentProps } from 'react-router';
import { pokemonType } from 'redux/Pokemons/types';

interface RouteParams {
  page: string;
}

export interface Props extends RouteComponentProps<RouteParams> {
  pokemons: pokemonType[];
}

const Home = (props: Props) => {
  // if no page argument is passed, display first page
  const currentPage = parseInt(props.match.params.page, 10) || 1;

  return (
    <div>
      <Style.Intro>
        {currentPage > 1 ? (
          <Style.PageIterator to={`/pokedex/${currentPage - 1}`} title="Page précédente">
            {'<'} Page {currentPage - 1}
          </Style.PageIterator>
        ) : (
          <p />
        )}

        <p>Pokédex !</p>
        <Style.PageIterator to={`/pokedex/${currentPage + 1}`} title="Page suivante">
          Page {currentPage + 1} {'>'}
        </Style.PageIterator>
      </Style.Intro>
      <Style.PokemonsContainer>
        {props.pokemons.map(pokemon => (
          <Pokemon key={pokemon.id} pokemon={pokemon} />
        ))}
      </Style.PokemonsContainer>
    </div>
  );
};

export default Home;
