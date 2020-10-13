import React from "react";
import { View, Text, StyleSheet, Image } from "react-native";

export default function HamIcon() {
  return <Image source={require("../../assets/foriffylogo.png")} style={styles.logo}   />;
}

const styles = StyleSheet.create({
  logo: {
    height: 50,
    width: 154 , 
    }
});
