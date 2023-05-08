export interface Pokemon {
  name: string;
  url: string; 
}

export interface PokemonDetail{
  abilities: Ability[];
  base_experience: number;
}

export interface Ability {
  ability: {
    name: string,
    url: string,
  }
}
export interface PokemonState {
  isLoadingPokemons: boolean;
  pokemonsList: Pokemon[];
  pokemonSelected: PokemonDetail;
}
