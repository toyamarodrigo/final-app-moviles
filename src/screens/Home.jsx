import React, { useState } from "react";
import { Input, Button, Stack, Center, Heading, Image, useToast, Text } from "native-base";
import { useDispatch, useSelector } from "react-redux";

import { getPokemon } from "../actions/pokemon.actions";
import { BasicLayout } from "../layout";
import { FETCH_POKEMON_ERROR, FETCH_POKEMON_SUCCESS } from "../utils/constants";

export const Home = ({ navigation }) => {
  const [searchPokemon, setSearchPokemon] = useState(null);
  const toast = useToast();
  const dispatch = useDispatch();
  const pokemon = useSelector((state) => state.pokemon);

  const handleRandomClick = async () => {
    const randomPokemon = Math.floor(Math.random() * 898) + 1;
    const response = await dispatch(getPokemon(randomPokemon));

    if (response.type === FETCH_POKEMON_SUCCESS) {
      navigation.navigate("details");
    } else {
      toast.show({
        title: "Error finding Pokemon",
        description: "Please try again",
        placement: "bottom",
        status: "error",
      });
    }
    setSearchPokemon(null);
  };

  const handleSearchPokemon = async () => {
    if (!searchPokemon || searchPokemon === "0") {
      handleRandomClick();
    } else {
      const response = await dispatch(getPokemon(searchPokemon));

      if (response.type === FETCH_POKEMON_ERROR) {
        toast.show({
          title: "Pokemon not found",
          description: "Try searching another pokemon",
          placement: "bottom",
          status: "error",
        });
      } else {
        navigation.navigate("details", { pokemon });
      }
      setSearchPokemon(null);
    }
  };

  if (pokemon.loading) return <Text>Loading...</Text>;

  return (
    <BasicLayout>
      <Stack safeArea space={4} w={"100%"}>
        <Center>
          <Heading>
            <Image
              alt="Pokemon logo"
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
            variant="filled"
            onChangeText={(searchPokemon) => setSearchPokemon(searchPokemon)}
          />
          <Button bgColor="red.600" size="md" w={"100%"} onPress={() => handleSearchPokemon()}>
            Search
          </Button>
          <Button size="md" onPress={() => handleRandomClick()}>
            Random
          </Button>
        </Stack>
      </Stack>
    </BasicLayout>
  );
};
