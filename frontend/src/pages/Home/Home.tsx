import * as React from 'react';

import Pokemon from 'components/Pokemon';

import { makeGetRequest } from 'services/networking/request';
import loader from './../../assets/loader.svg';

import Style from './Home.style';
import { useState, useEffect } from 'react';

interface PokemonData {
  id: number;
  name: string;
  height: number;
  weight: number;
}

const fetchAPIPage = async (page_n: number) => {
  // requests API page and updates state
  var error = '';
  var pokemons = [];
  try {
    const data = await makeGetRequest('/pokemon?page=' + page_n);
    pokemons = data.body;
  } catch (error) {
    error = 'Unable to call poke API: ' + error.toString();
  }
  return { pokemons, error };
};

const Home = () => {
  const [loading, setLoading] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);
  const [error, setError] = useState('');
  const [pokemons, setPokemons] = useState<PokemonData[]>([]);

  useEffect(
    () => {
      fetchAPIPage(currentPage).then(data => {
        setPokemons(data['pokemons']);
        setError(data['error']);
      });
    },
    [currentPage],
  );

  return (
    <div>
      <Style.Intro>
        {currentPage > 1 ? (
          <Style.PageIterator
            onClick={() => {
              setCurrentPage(currentPage - 1);
            }}
          >
            {'<'} Page {currentPage - 1}
          </Style.PageIterator>
        ) : (
          <p />
        )}

        <p>Pokédex !</p>
        <Style.PageIterator
          onClick={() => {
            setCurrentPage(currentPage + 1);
          }}
        >
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
