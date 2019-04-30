import React, { lazy, Suspense } from 'react';
import { Route, Switch } from 'react-router';

const Home = lazy(() => import('./pages/Home'));
const PokemonPage = lazy(() => import('./pages/PokemonPage'));

const routes = () => (
  <Suspense fallback={<div>Loading...</div>}>
    <Switch>
      <Route exact path="/" component={Home} />
      <Route exact path="/pokedex/:page" component={Home} />
      <Route exact path="/pokemon/:id" component={PokemonPage} />
    </Switch>
  </Suspense>
);

export default routes;
