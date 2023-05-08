import { Pokemon, PokemonDetail, PokemonState } from './pokemons.interface';
import { PayloadAction, createSlice } from '@reduxjs/toolkit';

const initialState: PokemonState = {
  isLoadingPokemons: false,
  pokemonsList: [],
  pokemonSelected: {
    abilities: [],
    base_experience: 0,
  },
};

const pokemonSlice = createSlice({
  initialState,
  name: 'pokemon',
  reducers:{
    setPokemonsList: (state: PokemonState, action: PayloadAction<Pokemon[]>) => {
      state.pokemonsList = action.payload;
    },
    setIsLoadingPokemons: (state: PokemonState, action: PayloadAction<boolean>) => {
      state.isLoadingPokemons = action.payload;
    },
    setPokemonSelected: (state: PokemonState, action: PayloadAction<PokemonDetail>) => {
      state.pokemonSelected = action.payload;
    },
  },
});

const pokemonReducer = pokemonSlice.reducer;
export const {setPokemonsList, setIsLoadingPokemons, setPokemonSelected} = pokemonSlice.actions;
export default pokemonReducer;
