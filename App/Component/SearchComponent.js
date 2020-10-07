import React from "react";
import { View, Text, StyleSheet } from "react-native";
import { MaterialCommunityIcons } from "@expo/vector-icons";

export default function SearchComponent() {
  return (
    <View style={styles.Search}>
      <Text>Search</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  Search: {
    backgroundColor: "#F0EEEE",
    height: "6%",
    width: "80%",
    borderRadius: 50,
    alignItems: "flex-start",
    marginTop: "6%",
    marginLeft: "4%",
  },
});
