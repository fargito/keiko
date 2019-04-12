import * as React from 'react';

import {PokemonType} from "redux/Pokemon/types";
import loader from '../../loader.svg';
import Style from './WithDataFetching.style';
import { PokemonAction } from "redux/Pokemon";

const WithDataFetching = <P extends object>(
  dataName: string,
  fetchFunction: (props: P) => any,
  shouldCallEffect: (props: P) => any[],
  successFunction?: (props: P, data: PokemonType[]) => PokemonAction,
) => (BaseComponent: React.ComponentType<P>) => (props: P) => {
  const [data, setData] = React.useState<any>(null);
  const [loading, setLoading] = React.useState<boolean>(false);
  const [error, setError] = React.useState<string | null>(null);

  React.useEffect(
    () => {
      const fetchData = async () => {
        setLoading(true);
        try {
          const {body} = await fetchFunction(props);
          if (successFunction) {
            successFunction(props, body)
          } else {
            setData(body);
          }
        } catch (error) {
          setError(error.toString());
        }
        setLoading(false);
      };

      fetchData();
    },
    [...shouldCallEffect(props)],
  );

  const customProps = {
    [dataName]: data,
  };

  return (
    <React.Fragment>
      {loading ? (
        <Style.Loader src={loader} alt="Loading..."/>
      ) : error ? (
        <Style.Error>{error}</Style.Error>
      ) : (
        data && <BaseComponent {...props} {...customProps} />
      )}
    </React.Fragment>
  );
};

export default WithDataFetching;
