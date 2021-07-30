import { StyleSheet } from "react-native";
import { Image, Text, View } from "native-base";
import React from "react";

export const PokeCard = () => {
  return (
    <>
      <View style={styles.pokemonBodyContainer}>
        {/* Pokemon Image */}
        <Image alt="pokemon image" src="#" style={styles.pokemonImage} />

        {/* Pokemon Order & Name */}
        <View style={styles.pokemonNameContainer}>
          <Text>#</Text>
          <Text>#</Text>
        </View>

        {/* Pokemon HP, ATK, DF, SP & Type */}
        <View style={styles.pokemonInfo}>
          <View style={styles.pokemonStatsContainer}>
            <View
              style={{
                display: "flex",
                gap: "10px",
                flexDirection: "column",
                textAlign: "justify",
              }}
            >
              <Text>{`HP: 100`}</Text>
              <Text>{`ATK: 100`}</Text>
              <Text>{`DF: 100`}</Text>
              <Text>{`SP: 100`}</Text>
            </View>
          </View>
          <View style={styles.pokemonTypesContainer}>
            <Text>{`Type:`}</Text>
          </View>
        </View>

        {/* Pokemon Base EXP, Height & Weight */}
        <View style={styles.pokemonStatsContainer}>
          <View>
            <View style={styles.pokemonSquareStat}>
              <Text>BASE EXP</Text>
            </View>

            <View style={styles.pokemonSquareTitle}>
              <Text>Base Exp.</Text>
            </View>
          </View>

          <View>
            <View style={styles.pokemonSquareStat}>
              <Text>HEIGHT mt</Text>
            </View>

            <View style={styles.pokemonSquareTitle}>
              <Text>Height</Text>
            </View>
          </View>

          <View>
            <View style={styles.pokemonSquareStat}>
              <Text>WEIGHT kg</Text>
            </View>

            <View style={styles.pokemonSquareTitle}>
              <Text>Weight</Text>
            </View>
          </View>
        </View>
      </View>
    </>
  );
};

const styles = StyleSheet.create({
  pokemonImage: {
    position: "absolute",
    width: 100,
    height: "auto",
    backgroundColor: "white",
    borderRadius: 50,
    top: "-15%",
  },
  pokemonBodyContainer: {
    position: "relative",
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#fefefe",
    borderRadius: 20,
    width: "100%",
  },
  pokemonNameContainer: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    fontSize: 18,
    textTransform: "capitalize",
  },
  pokemonInfo: {
    display: "flex",
    justifyContent: "space-evenly",
    alignItems: "center",
    width: "100%",
  },
  pokemonTypesContainer: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    marginTop: 15,
  },
  pokemonStatsContainer: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    marginTop: 24,
  },
  pokemonSquareStat: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    padding: 20,
    borderRadius: 5,
    width: 100,
  },
  pokemonSquareTitle: {
    marginTop: 10,
  },
});

// const PokemonTypesContainer = styled.div`
//   display: flex;
//   justify-content: center;
//   align-items: center;
//   gap: 20px;
//   margin-top: 15px;
// > span {
//   img {
//     height: 20px;
//     width: auto;
//   }
// }
// `;

// const PokemonStatsContainer = styled.div`
//   display: flex;
//   justify-content: center;
//   align-items: center;
//   margin-top: 24px;
//   > div {
//     text-align: center;
//     > h3 {
//       font-size: 10px;
//     }
//   }
// `;

// const PokemonSquareStat = styled.div`
//   display: flex;
//   justify-content: center;
//   align-items: center;
//   padding: 20px;
//   border-radius: 5px;
//   width: 100px;
//   h3 {
//     font-size: 14px;
//   }
// `;

// const PokemonSquareTitle = styled.div`
//   margin-top: 10px;
//   h3 {
//     font-size: 10px;
//   }
// `;
