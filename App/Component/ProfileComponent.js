import React from "react";
import { View, Text, StyleSheet, Image } from "react-native";

export default function ProfileComponent() {
  return (
    <View style={styles.box}>
      <Image
        source={require("../../assets/153-1533974_emo-girl-vector-3d-cartoon-character-aka-ava.png")}
        style={styles.image}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  image: {
    width: 40,
    height: 40,
    marginRight: 8,
    overflow: "hidden",
    borderRadius: 50,
    alignContent: "center"
  },
});
