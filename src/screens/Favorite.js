import { Center, Stack } from "native-base";
import React from "react";

import { BasicLayout } from "../layout";

export const Favorite = () => {
  return (
    <BasicLayout>
      <Stack safeArea space={4} w={"100%"}>
        <Center>POKEMON CARD</Center>
      </Stack>
    </BasicLayout>
  );
};
