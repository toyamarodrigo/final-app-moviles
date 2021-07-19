import React from "react";
import { StatusBar } from "expo-status-bar";
import { NavigationContainer } from "@react-navigation/native";

import { Navigation } from "./src/navigation/Navigation/Navigation";

export default function App() {
  return (
    <>
      <StatusBar style="auto" />
      <NavigationContainer>
        <Navigation />
      </NavigationContainer>
    </>
  );
}
