import React, { useState } from "react";
import { DrawerContentScrollView } from "@react-navigation/drawer";
import { Box, Text, VStack, Divider, Pressable, HStack, Icon } from "native-base";
import { FontAwesome5 } from "@expo/vector-icons";

export const DrawerContent = ({ navigation }) => {
  const [active, setActive] = useState("home");

  const onChangeScreen = (screen) => {
    setActive(screen);
    navigation.navigate(screen);
  };

  return (
    <DrawerContentScrollView safeArea>
      <VStack mx={1} my={2} space={6}>
        <Box px={4}>
          <Text bold color="gray.600">
            Menu
          </Text>
        </Box>
        <Divider />
        <VStack space={2}>
          <Pressable px={5} py={3} rounded="md" onPress={() => onChangeScreen("home")}>
            <HStack active={active === "home"} alignItems="center" space={7}>
              <FontAwesome5 color="black" name="home" size={20} />
              <Text fontWeight={500}>Home</Text>
            </HStack>
          </Pressable>

          <Pressable px={5} py={3} rounded="md" onPress={() => onChangeScreen("favorite")}>
            <HStack active={active === "home"} alignItems="center" space={7}>
              <FontAwesome5 color="black" name="star" size={20} />
              <Text fontWeight={500}>Favorite</Text>
            </HStack>
          </Pressable>
        </VStack>
      </VStack>
    </DrawerContentScrollView>
  );
};
