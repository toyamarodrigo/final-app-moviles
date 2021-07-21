import AsyncStorage from "@react-native-async-storage/async-storage";
import { createStore, applyMiddleware, combineReducers, compose } from "redux";
import { composeWithDevTools } from "redux-devtools-extension/developmentOnly";
import thunk from "redux-thunk";

import rootReducer from "./reducers";

async function saveToAsyncStorage(state) {
  const serializedState = JSON.stringify(state);

  await AsyncStorage.setItem("pokemon", serializedState);
}

async function loadFromAsyncStorage() {
  const serializedState = await AsyncStorage.getItem("pokemon");

  return serializedState ? JSON.parse(serializedState) : {};
}

const store = createStore(
  rootReducer,
  loadFromAsyncStorage(),
  composeWithDevTools(applyMiddleware(thunk)),
);

store.subscribe(() => saveToAsyncStorage(store.getState()));

export default store;
