import * as React from 'react';

import Pokemon from 'components/Pokemon';

import { makeGetRequest } from 'services/networking/request';
import loader from './../../assets/loader.svg';

import Style from './Home.style';
import { useState, useEffect } from 'react';
import { RouteComponentProps } from 'react-router';
import { Link } from 'react-router-dom';

interface PokemonData {
  id: number;
  name: string;
  height: number;
  weight: number;
}

interface RouteParams {
  page: string;
}

interface Props extends RouteComponentProps<RouteParams> {}

const Home = (props: Props) => {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');
  const [pokemons, setPokemons] = useState<PokemonData[]>([]);

  // if no page argument is passed, display first page
  const currentPage = parseInt(props.match.params.page) || 1;

  useEffect(
    () => {
      makeGetRequest('/pokemon?page=' + currentPage)
        .then(data => {
          setPokemons(data.body);
        })
        .catch(error => setError(error.toString()));
    },
    [currentPage],
  );

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
        {loading ? (
          <img src={loader} alt="loading..." />
        ) : error ? (
          <div>{error}</div>
        ) : (
          pokemons.map((value: PokemonData, index: number) => (
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
