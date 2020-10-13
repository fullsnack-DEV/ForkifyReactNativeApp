import React, { useState } from "react";
import { StyleSheet, Text, View } from "react-native";
import HomeScreen from "./App/Screens/HomeScreen";
import { AppLoading } from "expo";
import * as Font from "expo-font";

const getfonts = () => {
  return Font.loadAsync({
    "nunito-bold": require("./assets/font/Nunito-Bold.ttf"),
    "nunito-semibold": require("./assets/font/Nunito-SemiBold.ttf"),
    "nunito-italic": require("./assets/font/Nunito-BoldItalic.ttf")
  });
};

export default function App() {
  const [fontloaded, setfontloaded] = useState(false);
  if (fontloaded) {
    return <HomeScreen />;
  } else {
    return (
      <AppLoading startAsync={getfonts} onFinish={() => setfontloaded(true)} />
    );
  }
}

const styles = StyleSheet.create({});
