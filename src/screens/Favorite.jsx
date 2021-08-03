import React, { useState } from "react";
import { Box, Button, Center, Icon, ScrollView, Stack, Text, VStack } from "native-base";
import { useDispatch, useSelector } from "react-redux";
import { FontAwesome } from "@expo/vector-icons";

import { BasicLayout } from "../layout";
import { removeFavorite } from "../actions/favorites.actions";

export const Favorite = () => {
  const [favoriteButton, setFavoriteButton] = useState(null);
  const { favoritePokemons } = useSelector((state) => state.favorites);
  const dispatch = useDispatch();

  console.log(favoritePokemons);

  // TODO: useEffect to get Favorites from localStorage
  // TODO: Show favorites pokemon data with component PokeCardFavorite
  // TODO: Handle not having favorites
  // TODO: Modal de confirmacion al borrar

  return (
    <BasicLayout safeArea>
      <ScrollView mt={8}>
        <VStack flex={1} space={4}>
          {favoritePokemons.map((pokemonList) => (
            <Center key={pokemonList.fav_pokemon.id}>
              <Box
                alignItems="center"
                backgroundColor="#fefefe"
                borderRadius={10}
                h={200}
                justifyContent="center"
                position="relative"
                w={"90%"}
              >
                <Box position="absolute" right={5} top={5} zIndex={2}>
                  <Button
                    backgroundColor="white"
                    borderRadius="full"
                    size={10}
                    onPress={() => dispatch(removeFavorite(pokemonList.fav_pokemon.id))}
                  >
                    <Icon as={FontAwesome} color="red" name="heart" size="sm" />
                  </Button>
                </Box>
                <Text>{pokemonList.fav_pokemon.name}</Text>
              </Box>
            </Center>
          ))}
        </VStack>
      </ScrollView>
    </BasicLayout>
  );
};
