import { Pokemon, PokemonState } from './pokemons.interface';
import { PayloadAction, createSlice } from '@reduxjs/toolkit';

const initialState: PokemonState = {
  isLoadingPokemons: false,
  pokemonsList: [],
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
  },
});

const pokemonReducer = pokemonSlice.reducer;
export const {setPokemonsList, setIsLoadingPokemons} = pokemonSlice.actions;
export default pokemonReducer;
