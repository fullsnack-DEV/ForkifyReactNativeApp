import React from "react";
import { View, Text, StyleSheet, Image } from "react-native";

export default function HamIcon() {
  return <Image source={require("../../assets/foriffylogoo.png")} style={styles.logo}   />;
}

const styles = StyleSheet.create({
  logo: {
    height: 40,
    width:  90 , 
    opacity: 1 ,
    }
});
