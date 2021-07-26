import React from "react";
import { Box, Center, Stack, Text, Image, Button } from "native-base";
import { useDispatch, useSelector } from "react-redux";

import { addFavorite, removeFavorite } from "../actions/favorites.actions";
import { BasicLayout } from "../layout";

export const Details = () => {
  const pokemon = useSelector((state) => state.pokemon);
  const dispatch = useDispatch();

  console.log("pokemon :>> ", pokemon);

  const handleAddFavorites = (pokemonId) => {
    dispatch(addFavorite(pokemonId));

    console.log("handleAddFavorites end");
  };

  const handleRemoveFavorites = (pokemonId) => {
    dispatch(removeFavorite(pokemonId));
    console.log(`pokemonId`, pokemonId);
  };

  return (
    <BasicLayout>
      <Stack safeArea alignItems="center" justifyContent="center" space={4} w={"100%"}>
        <Center>POKEMON DETAIL</Center>
        <Box
          alignItems="center"
          backgroundColor="#fefefe"
          borderRadius={20}
          direction="column"
          display="flex"
          justifyContent="center"
          position="relative"
          width="90%"
        >
          <Image
            alt="pokemon image"
            size={"lg"}
            source={{ uri: pokemon.currentPokemon.sprites.front_default }}
          />
          <Text textAlign="center">{pokemon.currentPokemon.name}</Text>
          <Button onPress={() => handleAddFavorites(pokemon.currentPokemon.id)}>
            Agregar a favoritos
          </Button>
          <Button onPress={() => handleRemoveFavorites(pokemon.currentPokemon.id)}>
            Quitar de favoritos
          </Button>
        </Box>
      </Stack>
    </BasicLayout>
  );
};
