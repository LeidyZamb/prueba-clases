import { combineReducers } from 'redux';
import authReducer from './authReducers/auth';
import pokemonReducer from './pokemonReducer/pokemons';

const rootReducer = combineReducers({
  auth: authReducer,
  pokemon: pokemonReducer,
});

export default rootReducer;
