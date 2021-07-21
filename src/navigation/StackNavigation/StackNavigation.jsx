import React from "react";
import { ArrowBackIcon, HamburgerIcon } from "native-base";
import { createStackNavigator } from "@react-navigation/stack";
import { Pressable } from "react-native";

import { Home } from "../../screens/Home";
import { Favorite } from "../../screens/Favorite";

const Stack = createStackNavigator();

export const StackNavigation = ({ navigation }) => {
  const buttonLeft = (screen) => {
    switch (screen) {
      case "details":
        return (
          <Pressable onPress={() => navigation.goBack()}>
            <ArrowBackIcon ml={4} size="sm" />;
          </Pressable>
        );

      default:
        return (
          <Pressable onPress={() => navigation.openDrawer()}>
            <HamburgerIcon ml={4} size="sm" />
          </Pressable>
        );
    }
  };

  return (
    <Stack.Navigator>
      <Stack.Screen
        component={Home}
        name="home"
        options={{
          title: "Pokemon App",
          headerTitleAlign: "center",
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
