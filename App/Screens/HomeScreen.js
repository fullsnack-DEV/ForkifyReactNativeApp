import React from "react";
import { View, Text, StyleSheet } from "react-native";

import Screen from "../Component/Screen";
import Apptext from "../Component/Apptext";
import ProfileComponent from "../Component/ProfileComponent";

import IconComponent from "../Component/IconComponent";
import SearchComponent from "../Component/SearchComponent";

export default function HomeScreen() {
  return (
    <Screen style={styles.screen}>
      <View style={styles.Container}>
        <IconComponent />
        <Apptext style={styles.text}>Forkify</Apptext>

        <ProfileComponent />
      </View>
      <Apptext style={styles.title}> Food & Restaurants in </Apptext>
      <Apptext style={styles.title1}> your city </Apptext>
      <SearchComponent />
    </Screen>
  );
}
const styles = StyleSheet.create({
  box: {
    height: 40,
    width: 50,
    color: "red",
  },
  icon: {
    marginLeft: 10,
    color: "orangered",
  },
  Container: {
    flexDirection: "row",
    justifyContent: "space-between",
    top: 20,
    alignItems: "center",
  },
  title: {
    fontSize: 30,
    marginTop: 50,
    marginLeft: 12,
    fontFamily: "nunito-bold",
  },
  title1: {
    fontSize: 30,
    marginTop: 1,
    marginLeft: 12,
    fontFamily: "nunito-bold",
  },
  text: {
    fontSize: 25,
    fontWeight: "700",
    fontFamily: "nunito-semibold",
  },
});
