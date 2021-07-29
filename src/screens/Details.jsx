import React, { useState, useEffect } from "react";
import { Box, Center, Stack, Text, Image, Button, Icon } from "native-base";
import { useDispatch, useSelector } from "react-redux";
import { FontAwesome } from "@expo/vector-icons";

import { addFavorite, removeFavorite } from "../actions/favorites.actions";
import { BasicLayout } from "../layout";

export const Details = () => {
  const [favoriteButton, setFavoriteButton] = useState(null);
  const { pokemon, favorites } = useSelector((state) => state);

  const dispatch = useDispatch();

  const handleFavorites = (pokemonId) => {
    setFavoriteButton(!favoriteButton);
    if (favoriteButton) {
      dispatch(removeFavorite(pokemonId));
    } else {
      dispatch(addFavorite(pokemonId));
    }
  };

  useEffect(() => {
    const result = favorites.favoritePokemons.some(
      (favPokemon) => favPokemon.fav_pokemon.id === pokemon.currentPokemon.id,
    );

    setFavoriteButton(result);
  }, []);

  // TODO: useEffect to get Favorites from localStorage and display data

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

          <Icon
            as={FontAwesome}
            name={favoriteButton ? "heart" : "heart-o"}
            onPress={() => handleFavorites(pokemon.currentPokemon.id)}
          />
        </Box>
      </Stack>
    </BasicLayout>
  );
};
