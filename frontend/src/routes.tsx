import React, { lazy, Suspense } from 'react';
import { Route, Switch, Redirect } from 'react-router';
import GlobalStyle from './globalStyle';

const Home = lazy(() => import('./pages/Home'));
const PokemonPage = lazy(() => import('./pages/PokemonPage'));

const routes = () => (
  <Suspense fallback={<div>Loading...</div>}>
    <GlobalStyle />
    <Switch>
      <Route exact path="/" component={() => <Redirect to="/pokedex/1" />} />
      <Route exact path="/pokedex/:page" component={Home} />
      <Route exact path="/pokemon/:id" component={PokemonPage} />
    </Switch>
  </Suspense>
);

export default routes;
