import React from "react";
import { ImageBackground, StyleSheet, Text, View } from "react-native";

export const BasicLayout = ({ children }) => {
  return (
    <View style={styles.container}>
      <ImageBackground
        alt="Pokemon background app"
        source={require("../assets/pokemon-background.png")}
        style={styles.image}
      >
        {children}
      </ImageBackground>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  image: {
    flex: 1,
    resizeMode: "cover",
    justifyContent: "center",
    width: "100%",
    height: "100%",
  },
});
