import * as React from 'react';

import Pokemon from 'components/Pokemon';

import { makeGetRequest } from 'services/networking/request';

import Style from './Home.style';
import { Link } from 'react-router-dom';
import { async } from 'q';

interface Props {}
interface State {
  pokemons: {
    id: number;
    name: string;
    height: number;
    weight: number;
  }[];
  loading: boolean;
  error: string;
  currentPage: number;
}

class Home extends React.Component<Props, State> {
  constructor(props: object) {
    super(props);
    this.state = {
      pokemons: [],
      loading: true,
      error: '',
      currentPage: 1,
    };
  }

  fetchAPIPage = async () => {
    // requests API page and updates state
    this.setState({ loading: true });
    try {
      const data = await makeGetRequest('/pokemon?page=' + this.state.currentPage);
      this.setState({ pokemons: JSON.parse(data['text']), loading: false });
    } catch (error) {
      this.setState({ error: 'Unable to call poke API: ' + error.toString(), loading: false });
    }
  };

  incrementPage = async (increment: number) => {
    const next_n = Math.max(this.state.currentPage + increment, 1);
    await this.setState({ currentPage: next_n });
    this.fetchAPIPage();
  };

  componentDidMount() {
    this.fetchAPIPage();
  }

  render(): React.ReactNode {
    return (
      <div>
        <Style.Intro>
          {this.state.currentPage > 1 ? (
            <Style.PageIterator onClick={() => this.incrementPage(-1)}>
              {'<'} Page {this.state.currentPage - 1}
            </Style.PageIterator>
          ) : (
            <p />
          )}

          <p>Pokédex !</p>
          <Style.PageIterator onClick={() => this.incrementPage(1)}>
            Page {this.state.currentPage + 1} {'>'}
          </Style.PageIterator>
        </Style.Intro>
        <Style.PokemonsContainer>
          {this.state.loading ? (
            <img src={process.env.PUBLIC_URL + 'loader.svg'} alt="loading..." />
          ) : this.state.error ? (
            <div>{this.state.error}</div>
          ) : (
            this.state.pokemons.map((value, index) => (
              <Link
                to={'/pokemon/' + value.id}
                style={{ textDecoration: 'none', color: 'inherit' }}
              >
                <Pokemon
                  name={value.name}
                  id={value.id}
                  height={value.height}
                  weight={value.weight}
                />
              </Link>
            ))
          )}
        </Style.PokemonsContainer>
      </div>
    );
  }
}

export default Home;
