import axios from 'axios';
import { POKEMON_URL } from '../../config/config.api';
import { setIsLoadingPokemons, setPokemonSelected, setPokemonsList } from '../reducers/pokemonReducer/pokemons';


export const fetchPokemons = () => async (dispatch: Function) => {
  dispatch(setIsLoadingPokemons(true));
  try {
    const response = await axios.get(POKEMON_URL);
    const pokemons = response.data.results;
    dispatch(setPokemonsList(pokemons));
    //return pokemons;
  } catch (error) {
    console.log('error', error);
    dispatch(setPokemonsList([]));
  }
  dispatch(setIsLoadingPokemons(false));
};

export const fetchPokemonSelected = (url: string) => async (dispatch: Function) => {
  try {
    const response = await axios.get(url);
    dispatch(setPokemonSelected(response.data));
    console.log(response.data.abilities);
  } catch (error) {
    dispatch(setPokemonSelected(
      {
        abilities: [],
        base_experience: 0,
      }
    ));
    console.log(error);
  }
};
