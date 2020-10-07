import React from "react";
import { View, Text, StyleSheet } from "react-native";
import { MaterialCommunityIcons } from "@expo/vector-icons";

export default function IconComponent() {
  return (
    <MaterialCommunityIcons name="hamburger" size={40} style={styles.icon} />
  );
}

const styles = StyleSheet.create({
  icon: {
    marginLeft: 10,
    color: "orangered",
  },
});
