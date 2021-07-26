import AsyncStorage from "@react-native-async-storage/async-storage";
import { createStore, applyMiddleware } from "redux";
import { composeWithDevTools } from "redux-devtools-extension/developmentOnly";
import thunk from "redux-thunk";

import rootReducer from "./reducers";

async function savePokemonToAsyncStorage(state) {
  const serializedState = JSON.stringify(state);

  await AsyncStorage.setItem("pokemon", serializedState);
}

async function loadPokemonFromAsyncStorage() {
  const serializedState = await AsyncStorage.getItem("pokemon");

  return serializedState ? JSON.parse(serializedState) : {};
}

const store = createStore(
  rootReducer,
  loadPokemonFromAsyncStorage(),
  composeWithDevTools(applyMiddleware(thunk)),
);

store.subscribe(() => savePokemonToAsyncStorage(store.getState()));

export default store;
