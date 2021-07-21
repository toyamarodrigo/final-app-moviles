import React, { useState } from "react";
import { StyleSheet } from "react-native";
import { Input, Button, Stack, Center, Heading, Image } from "native-base";
import { useDispatch, useSelector } from "react-redux";

import { getPokemon } from "../actions/pokemon.actions";
import { BasicLayout } from "../layout";

export const Home = ({ navigation }) => {
  const [searchPokemon, setSearchPokemon] = useState("");
  const dispatch = useDispatch();
  const pokemon = useSelector((state) => state.pokemon);

  const handleRandomClick = async () => {
    const randomPokemon = Math.floor(Math.random() * 898) + 1;

    await dispatch(getPokemon(randomPokemon));

    navigation.navigate("details", { pokemon });
  };

  if (pokemon.loading) return "Loading...";

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
            type="text"
            value={searchPokemon}
            variant="filled"
            onChangeText={() => setSearchPokemon(searchPokemon)}
          />
          <Button bgColor="red.600" size="sm" w={"100%"}>
            Search
          </Button>
          <Button size="sm" onPress={() => handleRandomClick()}>
            Random
          </Button>
        </Stack>
      </Stack>
    </BasicLayout>
  );
};

const styles = StyleSheet.create({});
