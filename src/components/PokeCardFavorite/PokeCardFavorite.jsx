import React from "react";
import { StyleSheet } from "react-native";
import { useDispatch } from "react-redux";
import { Text, Box, Button, Center, Icon, Stack, VStack, Image, useToast } from "native-base";
import { FontAwesome } from "@expo/vector-icons";

import { getPokemon } from "../../actions/pokemon.actions";
import { removeFavorite } from "../../actions/favorites.actions";
import { ERROR_FAVORITE_POKEMON, FETCH_POKEMON_SUCCESS } from "../../utils/constants";

export const PokeCardFavorite = ({ favoritePokemons, navigation }) => {
  const dispatch = useDispatch();
  const toast = useToast();

  const handleNavigateToDestails = async (pokemonId) => {
    const response = await dispatch(getPokemon(pokemonId));

    if (response.type === FETCH_POKEMON_SUCCESS) {
      navigation.navigate("details");
    } else {
      toast.show({
        title: "Error Redirecting",
        description: "Try again another time 😢",
        placement: "bottom",
        status: "error",
      });
    }
  };

  const handleRemoveFavorite = async (pokemonId) => {
    const response = await dispatch(removeFavorite(pokemonId));

    if (response.type === ERROR_FAVORITE_POKEMON) {
      toast.show({
        title: "Error Removing favorite",
        description: "Try again another time 😢",
        placement: "bottom",
        status: "error",
      });
    } else {
      toast.show({
        title: "Pokemon removed successfuly",
        description: "pokebye 👋",
        placement: "bottom",
        status: "success",
      });
    }
  };

  return (
    <VStack flex={1} space={4}>
      {favoritePokemons.map((pokemonList) => (
        <Center key={pokemonList.fav_pokemon.id} shadow={8}>
          <Box
            alignItems="center"
            borderRadius={10}
            h={200}
            justifyContent="center"
            position="relative"
            style={styles(pokemonList.fav_pokemon.types[0].type.name).pokemonColorType}
            w={"90%"}
          >
            <Box position="absolute" right={5} top={5} zIndex={2}>
              <Button
                backgroundColor="#fff"
                borderRadius="full"
                size={10}
                onPress={() => handleRemoveFavorite(pokemonList.fav_pokemon.id)}
              >
                <Icon as={FontAwesome} color="red" name="heart" size="sm" />
              </Button>
            </Box>
            <Stack pl={5} w={"100%"}>
              <Stack direction="row" w={"100%"}>
                <Image
                  alt="pokemon image"
                  backgroundColor="#fff"
                  borderRadius="full"
                  h={120}
                  source={{ uri: pokemonList.fav_pokemon.sprites.front_default }}
                  w={120}
                />
                <VStack fontSize={16} ml={6} space={2}>
                  <Text
                    fontWeight="bold"
                    style={styles(pokemonList.fav_pokemon.types[0].type.name).pokemonName}
                  >
                    # {pokemonList.fav_pokemon.order}
                  </Text>
                  <Text
                    fontWeight="bold"
                    ml={1}
                    style={styles(pokemonList.fav_pokemon.types[0].type.name).pokemonName}
                    textTransform="capitalize"
                  >
                    {pokemonList.fav_pokemon.name}
                  </Text>
                  <VStack direction="row" justifyContent="flex-start" my={2} space={2}>
                    {pokemonList.fav_pokemon.types.map(({ type }, index) => (
                      <Box key={index} shadow={3}>
                        <Image
                          alt="Pokemon badge type"
                          height={4}
                          source={{
                            uri: `https://veekun.com/dex/media/types/en/${type.name}.png`,
                          }}
                          width={50}
                        />
                      </Box>
                    ))}
                  </VStack>
                  <Button
                    backgroundColor="red"
                    size="sm"
                    w={"90%"}
                    onPress={() => handleNavigateToDestails(pokemonList.fav_pokemon.id)}
                  >
                    Details
                  </Button>
                </VStack>
              </Stack>
            </Stack>
          </Box>
        </Center>
      ))}
    </VStack>
  );
};

const styles = (colorType) =>
  StyleSheet.create({
    pokemonColorType: {
      backgroundColor:
        (colorType === "bug" && "#A8B820") ||
        (colorType === "dark" && "#7C4A16") ||
        (colorType === "dragon" && "#603986") ||
        (colorType === "electric" && "#FFD700") ||
        (colorType === "fairy" && "#F8B2E7") ||
        (colorType === "fighting" && "#8E3931") ||
        (colorType === "fire" && "#F05030") ||
        (colorType === "flying" && "#B280D2") ||
        (colorType === "ghost" && "#43275D") ||
        (colorType === "grass" && "#137C15") ||
        (colorType === "ground" && "#E0C068") ||
        (colorType === "ice" && "#728EF0") ||
        (colorType === "normal" && "#A8A878") ||
        (colorType === "poison" && "#A040A0") ||
        (colorType === "psychic" && "#D05D7A") ||
        (colorType === "rock" && "#745600") ||
        (colorType === "shadow" && "#F45987") ||
        (colorType === "steel" && "#B8B8D0") ||
        (colorType === "water" && "#A9DEf2") ||
        "#9BE5DC",
    },
    pokemonName: {
      color:
        colorType === "dark" || colorType === "dragon" || colorType === "ghost" ? "white" : "black",
    },
  });
