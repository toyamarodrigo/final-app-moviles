import React from "react";
import { IconButton } from "react-native-paper";
import { createStackNavigator } from "@react-navigation/stack";

import { Home } from "../../screens/Home";
import { Favorite } from "../../screens/Favorite";

const Stack = createStackNavigator();

export const StackNavigation = ({ navigation }) => {
  const buttonLeft = (screen) => {
    switch (screen) {
      case "favorite":
      case "details":
        return <IconButton icon="arrow-left" onPress={() => navigation.goBack()} />;
      default:
        return <IconButton icon="menu" onPress={() => navigation.openDrawer()} />;
    }
  };

  return (
    <Stack.Navigator>
      <Stack.Screen
        component={Home}
        name="home"
        options={{
          title: "Home Screen",
          headerLeft: () => buttonLeft("home"),
        }}
      />
      <Stack.Screen
        component={Favorite}
        name="favorite"
        options={{
          title: "Favorite Screen",
          headerLeft: () => buttonLeft("favorite"),
        }}
      />
    </Stack.Navigator>
  );
};
