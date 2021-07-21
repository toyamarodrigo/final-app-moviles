import {
  FETCH_POKEMON_REQUEST,
  FETCH_POKEMON_SUCCESS,
  FETCH_POKEMON_ERROR,
} from "../utils/constants";

const InitialState = {
  currentPokemon: null,
  error: false,
  loading: false,
};

const pokemonReducer = (state = InitialState, action) => {
  switch (action.type) {
    case FETCH_POKEMON_REQUEST:
      return { ...state, error: false, loading: true };
    case FETCH_POKEMON_SUCCESS:
      return { ...state, currentPokemon: action.payload, error: false, loading: false };
    case FETCH_POKEMON_ERROR:
      return { ...state, currentPokemon: null, error: true, loading: false };
    default:
      return state;
  }
};

export default pokemonReducer;
