import { Center, Stack } from "native-base";
import React from "react";
import { useSelector } from "react-redux";

import { BasicLayout } from "../layout";

export const Favorite = () => {
  const favPokemon = useSelector((state) => state.favorites);

  console.log(favPokemon);

  return (
    <BasicLayout>
      <Stack safeArea space={4} w={"100%"}>
        <Center>POKEMON CARD</Center>
      </Stack>
    </BasicLayout>
  );
};
