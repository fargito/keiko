import * as React from 'react';

import Pokemon from 'components/Pokemon';

import Style from './Home.style';
import { useState, useEffect } from 'react';
import { RouteComponentProps } from 'react-router';
import { PokemonData } from '../../HOC/with-fetch-poke-api';

interface RouteParams {
  page: string;
}

export interface Props extends RouteComponentProps<RouteParams> {
  pokemons: PokemonData[];
}

const Home = (props: Props) => {
  const [error, setError] = useState('');

  // if no page argument is passed, display first page
  const currentPage = parseInt(props.match.params.page) || 1;

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
        {error ? (
          <div>{error}</div>
        ) : (
          props.pokemons.map((value: PokemonData, index: number) => (
            <Pokemon
              key={value.id}
              name={value.name}
              id={value.id}
              height={value.height}
              weight={value.weight}
            />
          ))
        )}
      </Style.PokemonsContainer>
    </div>
  );
};

export default Home;
