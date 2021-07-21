import React from "react";
import { Center, Stack, Text } from "native-base";
import { useSelector } from "react-redux";

import { BasicLayout } from "../layout";

export const Details = () => {
  const pokemon = useSelector((state) => state.pokemon);

  return (
    <BasicLayout>
      <Stack safeArea space={4} w={"100%"}>
        <Center>POKEMON DETAIL</Center>
        <Text>{pokemon.currentPokemon.name}</Text>
      </Stack>
    </BasicLayout>
  );
};
