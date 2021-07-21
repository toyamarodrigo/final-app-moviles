import {
  BASE_URL,
  FETCH_POKEMON_REQUEST,
  FETCH_POKEMON_SUCCESS,
  FETCH_POKEMON_ERROR,
} from "../utils/constants";

const getPokemon = (pokemon) => async (dispatch) => {
  await dispatch({ type: FETCH_POKEMON_REQUEST });
  try {
    const response = await fetch(`${BASE_URL}/${pokemon}/`);
    const data = await response.json();

    if (response.status === 200) {
      return dispatch({ type: FETCH_POKEMON_SUCCESS, payload: data });
    }
  } catch (error) {
    return dispatch({ type: FETCH_POKEMON_ERROR, payload: error });
  }
};

export { getPokemon };
