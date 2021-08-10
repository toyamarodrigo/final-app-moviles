import { Heading, HStack } from "native-base";
import React from "react";

import { BasicLayout } from "../../layout";

export const NoFavorites = () => {
  return (
    <BasicLayout>
      <HStack justifyContent="center" space={2}>
        <Heading color="black">No Favorites</Heading>
      </HStack>
    </BasicLayout>
  );
};
