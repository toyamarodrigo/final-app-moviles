import React from "react";
import { ScrollView } from "native-base";
import { useSelector } from "react-redux";

import { BasicLayout } from "../layout";
import { PokeCardFavorite, NoFavorites } from "../components";

export const Favorite = ({ navigation }) => {
  const { favoritePokemons } = useSelector((state) => state.favorites);

  if (!favoritePokemons.length) return <NoFavorites />;

  return (
    <BasicLayout safeArea>
      <ScrollView pt={8}>
        <PokeCardFavorite favoritePokemons={favoritePokemons} navigation={navigation} />
      </ScrollView>
    </BasicLayout>
  );
};
