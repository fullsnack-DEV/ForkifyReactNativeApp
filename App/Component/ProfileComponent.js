import React from "react";
import { View, Text, StyleSheet } from "react-native";

export default function ProfileComponent() {
  return <View style={styles.box}></View>;
}

const styles = StyleSheet.create({
  box: {
    height: 60,
    width: 50,
    backgroundColor: "blue",
    marginRight: 12,
    borderRadius: 15,
  },
});
