import {
  BASE_URL,
  GET_FAVORITES_POKEMONS,
  ADD_FAVORITE_POKEMON,
  REMOVE_FAVORITE_POKEMON,
  ERROR_FAVORITE_POKEMON,
} from "../utils/constants";

const getFavorites = (pokemon) => async (dispatch) => {
  try {
    // const response = await fetch(`${BASE_URL}/${pokemon}/`);
    // const data = await response.json();
    // https://pokeapi.co/api/v2/pokemon/{id or name}/

    return dispatch({ type: GET_FAVORITES_POKEMONS, payload: data });
  } catch (error) {
    return dispatch({ type: ERROR_FAVORITE_POKEMON, payload: data });
  }
};

const addFavorite = (pokemonId) => async (dispatch) => {
  try {
    const response = await fetch(`${BASE_URL}/${pokemonId}/`);
    const data = await response.json();

    return dispatch({ type: ADD_FAVORITE_POKEMON, payload: data });
  } catch (error) {
    return dispatch({ type: ERROR_FAVORITE_POKEMON, payload: error });
  }
};

const removeFavorite = (pokemonId) => async (dispatch) => {
  try {
    return dispatch({ type: REMOVE_FAVORITE_POKEMON, payload: pokemonId });
  } catch (error) {
    return dispatch({ type: ERROR_FAVORITE_POKEMON, payload: data });
  }
};

export { getFavorites, addFavorite, removeFavorite };
