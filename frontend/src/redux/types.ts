import { LoginAction, LoginState } from './Login';
import { PokemonsState } from './Pokemons';

export type RootState = Readonly<{
  login: LoginState;
  pokemons: PokemonsState;
}>;
export type RootAction = LoginAction;
