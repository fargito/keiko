import * as React from 'react';
import { useEffect, useState } from 'react';
import { makeGetRequest } from 'services/networking/request';
import Loader from 'components/Loader';
import ErrorDisplayer from 'components/ErrorDisplayer';
import { pokemonType } from 'redux/Pokemons/types';

export interface WithFetchAPIType {
  fetchPokemonsSuccess: (responseBody: any) => any;
}

// High order component logic for retrieving data from the pokeAPI
const withFetchPokeAPI = <Props extends WithFetchAPIType>(
  // using functions passed by child in order to get the endpoint and the reload effect
  getEndpoint: (props: Props) => string,
  dataName: string,
  shouldReloadEffect: (props: Props) => any[],
) => (BaseComponent: React.ComponentType<Props>) => (props: Props) => {
  const [data, setData] = useState({});
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');

  useEffect(
    () => {
      setLoading(true);
      makeGetRequest(getEndpoint(props))
        .then(result => {
          setData({ [dataName]: result.body });
          setLoading(false);
          props.fetchPokemonsSuccess(result.body);
        })
        .catch(error => {
          setError(error.toString());
          setLoading(false);
        });
    },
    [...shouldReloadEffect(props)],
  );
  return loading ? (
    <Loader />
  ) : error ? (
    <ErrorDisplayer error={error} />
  ) : (
    <BaseComponent {...props} {...data} />
  );
};

export default withFetchPokeAPI;
