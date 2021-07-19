import React, { useState } from "react";
import { DrawerContentScrollView } from "@react-navigation/drawer";
import { Drawer } from "react-native-paper";

export const DrawerContent = ({ navigation }) => {
  const [active, setActive] = useState("home");

  const onChangeScreen = (screen) => {
    setActive(screen);
    navigation.navigate(screen);
  };

  return (
    <DrawerContentScrollView>
      <Drawer.Section>
        <Drawer.Item
          active={active === "home"}
          label="Home"
          onPress={() => onChangeScreen("home")}
        />
        <Drawer.Item
          active={active === "favorite"}
          label="Favorite"
          onPress={() => onChangeScreen("favorite")}
        />
      </Drawer.Section>
    </DrawerContentScrollView>
  );
};
