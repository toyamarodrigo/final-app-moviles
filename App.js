import React from "react";
import { StatusBar } from "expo-status-bar";
import { NavigationContainer } from "@react-navigation/native";
import { NativeBaseProvider } from "native-base";
import { Provider } from "react-redux";

import store from "./src/store";
import { Navigation } from "./src/navigation/Navigation/Navigation";

export default function App() {
  return (
    <Provider store={store}>
      <NativeBaseProvider>
        <StatusBar style="auto" />
        <NavigationContainer>
          <Navigation />
        </NavigationContainer>
      </NativeBaseProvider>
    </Provider>
  );
}
