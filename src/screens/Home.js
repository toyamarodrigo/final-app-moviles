import React from "react";
import { StyleSheet } from "react-native";
import { Input, Button, Stack, Center, Heading, Image } from "native-base";

import { BasicLayout } from "../layout";

export const Home = () => {
  const [pokemon, setPokemon] = React.useState("");

  return (
    <BasicLayout>
      <Stack safeArea space={4} w={"100%"}>
        <Center>
          <Heading>
            <Image
              h={120}
              resizeMode={"contain"}
              source={require("../assets/pokemon-logo.png")}
              w={300}
            />
          </Heading>
        </Center>

        <Stack alignitems="center" justifyContent="center" mx={10} space={4}>
          <Input
            placeholder="Pokemon name"
            size="lg"
            value={pokemon}
            variant="filled"
            onChangeText={(pokemon) => setPokemon(pokemon)}
          />
          <Button bgColor="red.600" size="sm" w={"100%"}>
            Search
          </Button>
          <Button size="sm">Random</Button>
        </Stack>
      </Stack>
    </BasicLayout>
  );
};

const styles = StyleSheet.create({});
