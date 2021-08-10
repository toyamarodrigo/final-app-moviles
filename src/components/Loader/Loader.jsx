import React from "react";
import { Heading, HStack, Spinner } from "native-base";

import { BasicLayout } from "../../layout";

export const Loader = () => {
  return (
    <BasicLayout>
      <HStack justifyContent="center" space={2}>
        <Heading color="black">Loading</Heading>
        <Spinner accessibilityLabel="Loading posts" color="black" />
      </HStack>
    </BasicLayout>
  );
};
