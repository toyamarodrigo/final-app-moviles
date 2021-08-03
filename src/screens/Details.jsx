import React from "react";
import { Stack } from "native-base";
import { useSelector } from "react-redux";

import { PokeCardDetail } from "../components";
import { BasicLayout } from "../layout";

export const Details = () => {
  const { pokemon } = useSelector((state) => state);

  return (
    <BasicLayout>
      <Stack safeArea alignItems="center" justifyContent="center" space={4} w={"100%"}>
        <PokeCardDetail currentPokemon={pokemon.currentPokemon} />
      </Stack>
    </BasicLayout>
  );
};
