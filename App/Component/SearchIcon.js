import React from "react";
import { View, StyleSheet, TouchableOpacity, TouchableWithoutFeedback } from "react-native";
import { Feather } from "@expo/vector-icons";
import colors from "../Config/color";

export default function SearchIcon({ontermsubmit}) {
  return (
    <View style={styles.Box}>
    <Feather name="search" size={30} style={styles.icon} onPress={()=> ontermsubmit ()}   />
     </View>
  );
}
const styles = StyleSheet.create({
  Box: {
    top:10,
    height: 50,
    width: 50,
    backgroundColor: "orangered",
    marginRight: 40,
    borderRadius: 15,
    alignItems: "center",
  },
  icon: {
    top: 10,
    color: colors.white,
  },
});
