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
            <HamburgerIcon color={"white"} ml={4} size="sm" />
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
          title: "",
          headerTitleAlign: "center",
          headerStyle: {
            backgroundColor: "rgb(220, 38, 38)",
            borderStyle: "none",
          },
          headerTintColor: "white",
          headerLeft: () => buttonLeft("home"),
        }}
      />
      <Stack.Screen
        component={Favorite}
        name="favorite"
        options={{
          title: "Favorites Pokemon",
          headerTitleAlign: "center",
          headerStyle: {
            backgroundColor: "rgb(220, 38, 38)",
            borderStyle: "none",
          },
          headerTintColor: "white",
          headerLeft: () => buttonLeft("favorite"),
        }}
      />
    </Stack.Navigator>
  );
};
