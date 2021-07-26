import { Center, Stack } from "native-base";
import React from "react";
import { useSelector } from "react-redux";

import { BasicLayout } from "../layout";

export const Favorite = () => {
  const { favoritePokemons } = useSelector((state) => state.favorites);

  console.log(favoritePokemons);

  // TODO: useEffect to get Favorites from localStorage
  // TODO: Show favorites pokemon data
  // TODO: Handle not having favorites

  return (
    <BasicLayout>
      <Stack safeArea space={4} w={"100%"}>
        <Center>POKEMON CARD</Center>
      </Stack>
    </BasicLayout>
  );
};
