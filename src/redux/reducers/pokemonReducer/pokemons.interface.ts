export interface Pokemon {
  name: string;
  url: string; 
}
export interface PokemonState {
  isLoadingPokemons: boolean;
  pokemonsList: Pokemon[];
}
