import * as React from 'react';

import Pokemon from 'components/Pokemon';

import Style from './Home.style';

class Home extends React.Component {
  render(): React.ReactNode {
    const pokemon = 'Carapuce';

    return (
      <Style.Intro>
        <div>Bienvenue sur ton futur pokédex !</div>
        <div>
          Tu vas pouvoir apprendre tout ce qu'il faut sur React, Redux et Symfony, et attraper des
          pokemons !
        </div>
        <Pokemon name="Carapuce" id={7} />
      </Style.Intro>
    );
  }
}

export default Home;
