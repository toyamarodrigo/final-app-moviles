import { Center, Stack } from "native-base";
import React from "react";
import { useSelector } from "react-redux";

import { BasicLayout } from "../layout";

export const Details = ({ navigation }) => {
  const pokemon = useSelector((state) => state.pokemon);

  return (
    <BasicLayout>
      <Stack safeArea space={4} w={"100%"}>
        <Center>POKEMON DETAIL</Center>
      </Stack>
    </BasicLayout>
  );
};
