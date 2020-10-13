import React from "react";
import {
  View,
  Text,
  StyleSheet,
  Image,
  TouchableWithoutFeedback,
} from "react-native";
import { MaterialCommunityIcons } from "@expo/vector-icons";

export default function IconComponent() {
  return (
    <TouchableWithoutFeedback>
      <Image
        style={styles.image}
        source={require("../../assets/cheese-burger.png")}
      />
    </TouchableWithoutFeedback>
  );
}

const styles = StyleSheet.create({
  image: {
    marginLeft: 10,
    
    width: 40,
    height: 40,
  },
});
