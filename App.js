import React, { useState } from "react";
import { StyleSheet, Text, View } from "react-native";
import { NavigationContainer} from "@react-navigation/native"
import { createStackNavigator} from "@react-navigation/stack"
import HomeScreen from "./App/Screens/HomeScreen";
import DetailScreen from "./App/Screens/DetailScreen"
import { AppLoading } from "expo";
import * as Font from "expo-font"; 


const getfonts = () => {
  return Font.loadAsync({
    "nunito-bold": require("./assets/font/Nunito-Bold.ttf"),
    "nunito-semibold": require("./assets/font/Nunito-SemiBold.ttf"),
    "nunito-italic": require("./assets/font/Nunito-BoldItalic.ttf")
  });
};

const Stack = createStackNavigator(); //stack to navigate 



export default function App() {
  const [fontloaded, setfontloaded] = useState(false);
  if (fontloaded) {
        return  (
    <NavigationContainer>
      <Stack.Navigator  screenOptions={{headerShown: false}}>
        <Stack.Screen name="Homescreen" component={HomeScreen}/>
          <Stack.Screen name="DetailScreen" component={DetailScreen}/>
      </Stack.Navigator>       
    </NavigationContainer>
    )
  } else {
    return (
      <AppLoading startAsync={getfonts} onFinish={() => setfontloaded(true)} />
    );
  }
}

const styles = StyleSheet.create({});
