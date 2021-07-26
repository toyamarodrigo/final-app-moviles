import { combineReducers } from "redux";

import favoritesReducer from "./favorites.reducer";
import pokemonReducer from "./pokemon.reducer";

const rootReducer = combineReducers({
  pokemon: pokemonReducer,
  favorites: favoritesReducer,
});

export default rootReducer;
