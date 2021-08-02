import React, { useState, useEffect } from "react";
import { Image, Text, Box, VStack, HStack, Stack, Button, Icon } from "native-base";
import { StyleSheet } from "react-native";
import { useDispatch, useSelector } from "react-redux";
import { FontAwesome } from "@expo/vector-icons";

import { addFavorite, removeFavorite } from "../../actions/favorites.actions";

export const PokeCard = ({ currentPokemon, favoritePokemons }) => {
  const { favorites } = useSelector((state) => state);
  const [favoriteButton, setFavoriteButton] = useState(null);
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
    const result = favorites.favoritePokemons?.some(
      (favPokemon) => favPokemon.fav_pokemon.id === currentPokemon.id,
    );

    setFavoriteButton(result);
  }, []);

  return (
    <>
      <Box
        alignItems="center"
        backgroundColor="#fefefe"
        borderRadius={10}
        h={"auto"}
        justifyContent="center"
        position="relative"
        w={"90%"}
      >
        <Box position="absolute" right={5} top={5} zIndex={2}>
          <Button
            backgroundColor="white"
            borderRadius="full"
            size={10}
            onPress={() => handleFavorites(currentPokemon.id)}
          >
            <Icon
              as={FontAwesome}
              color={favoriteButton ? "red" : "black"}
              name={favoriteButton ? "heart" : "heart-o"}
              size="sm"
            />
          </Button>
        </Box>
        <VStack
          borderTopRadius={10}
          pb={4}
          style={styles(currentPokemon.types[0].type.name).pokemonColorType}
          w={"100%"}
        >
          <Stack alignItems="center" justifyContent="center" py={4} space={4} w={"100%"}>
            <HStack fontSize={20} space={4}>
              <Text fontWeight="bold" style={styles(currentPokemon.types[0].type.name).pokemonName}>
                # {currentPokemon.order}
              </Text>
              <Text
                fontWeight="bold"
                style={styles(currentPokemon.types[0].type.name).pokemonName}
                textTransform="capitalize"
              >
                {currentPokemon.name}
              </Text>
            </HStack>
            <Image
              alt="pokemon image"
              backgroundColor="white"
              borderRadius="full"
              borderWidth={2}
              h={120}
              source={{ uri: currentPokemon.sprites.front_default }}
              w={120}
            />
          </Stack>
          <Stack direction="column" space={4}>
            <Stack direction="row" justifyContent="center" space={2}>
              {currentPokemon.types.map((pokemon, index) => (
                <Box key={index}>
                  <Image
                    alt="Pokemon badge type"
                    height={4}
                    source={{
                      uri: `https://veekun.com/dex/media/types/en/${pokemon.type.name}.png`,
                    }}
                    width={50}
                  />
                </Box>
              ))}
            </Stack>
          </Stack>
        </VStack>
        <VStack backgroundColor="orange" borderBottomRadius={10} pb={6} space={2} w={"100%"}>
          <HStack alignItems="center" my={4}>
            <HStack alignItems="center" justifyContent="center" space={8} w={"100%"}>
              <VStack space={2} w={"25%"}>
                <Text>
                  <Text fontWeight="bold">HP: </Text>
                  {currentPokemon.stats[0].base_stat}
                </Text>
                <Text>
                  <Text fontWeight="bold">ATK: </Text>
                  {currentPokemon.stats[1].base_stat}
                </Text>
                <Text>
                  <Text fontWeight="bold">DF: </Text>
                  <Text>{currentPokemon.stats[2].base_stat}</Text>
                </Text>
                <Text>
                  <Text fontWeight="bold">SP: </Text>
                  {currentPokemon.stats[3].base_stat}
                </Text>
              </VStack>
              <VStack
                alignItems="center"
                justifyContent="center"
                space={4}
                textAlign="center"
                w={"25%"}
              >
                <Text>
                  <Text fontWeight="bold">Height: </Text>
                  {currentPokemon.height / 10}mt
                </Text>
                <Text>
                  <Text fontWeight="bold">Weight: </Text>
                  {currentPokemon.weight / 10}kg
                </Text>
              </VStack>
            </HStack>
          </HStack>
          <VStack alignItems="center">
            <Text>
              <Text fontWeight="bold">BASE EXP: </Text>
              {currentPokemon.base_experience}
            </Text>
          </VStack>
        </VStack>
      </Box>
    </>
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
