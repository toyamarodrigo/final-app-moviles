import {
  GET_FAVORITES_POKEMONS,
  ADD_FAVORITE_POKEMON,
  REMOVE_FAVORITE_POKEMON,
  ERROR_FAVORITE_POKEMON,
} from "../utils/constants";

const InitialState = {
  favoritePokemons: [],
};

const favoritesReducer = (state = InitialState, action) => {
  switch (action.type) {
    case GET_FAVORITES_POKEMONS:
      return { ...state, favoritesPokemons: action.payload, error: false, loading: true };
    case ADD_FAVORITE_POKEMON:
      return {
        ...state,
        favoritePokemons: [...state.favoritePokemons, { fav_pokemon: action.payload }],
        error: false,
        loading: false,
      };
    case REMOVE_FAVORITE_POKEMON:
      return {
        ...state,
        favoritePokemons: state.favoritePokemons.filter(
          (pokemon) => pokemon.fav_pokemon.id !== action.payload,
        ),

        error: false,
        loading: true,
      };
    case ERROR_FAVORITE_POKEMON:
      return { ...state, error: true, loading: false };
    default:
      return state;
  }
};

export default favoritesReducer;
