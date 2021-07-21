import {
  FETCH_POKEMON_REQUEST,
  FETCH_POKEMON_SUCCESS,
  FETCH_POKEMON_ERROR,
} from "../utils/constants";

const pokemonReducer = (state = {}, action) => {
  switch (action.type) {
    case FETCH_POKEMON_REQUEST:
      return { ...state };
    case FETCH_POKEMON_SUCCESS:
      return { ...state };
    case FETCH_POKEMON_ERROR:
      return { ...state };
    default:
      return state;
  }
};

export default pokemonReducer;
