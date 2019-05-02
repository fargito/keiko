import * as React from 'react';
import { useEffect, useState } from 'react';
import { makeGetRequest } from 'services/networking/request';
import Loader from 'components/Loader';

export interface PokemonData {
  id: number;
  name: string;
  height: number;
  weight: number;
}

// High order component logic for retrieving data from the pokeAPI
const withFetchPokeAPI = <T extends object>(
  // using functions passed by child in order to get the endpoint and the reload effect
  endpoint: (props: T) => string,
  dataName: string,
  shouldReloadEffect: (props: T) => any[],
) => (BaseComponent: React.ComponentType<T>) => (props: T) => {
  const [data, setData] = useState({});
  const [loading, setLoading] = useState(true);

  useEffect(
    () => {
      setLoading(true);
      makeGetRequest(endpoint(props))
        .then(result => {
          setData({ [dataName]: result.body });
          setLoading(false);
        })
        .catch(error => console.log(error.toString()));
    },
    [...shouldReloadEffect(props)],
  );
  return loading ? <Loader /> : <BaseComponent {...props} {...data} />;
};

export default withFetchPokeAPI;
