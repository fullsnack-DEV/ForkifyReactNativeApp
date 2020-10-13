import React , {useState , useEffect} from "react";
import { View, Text, StyleSheet , KeyboardAvoidingView } from "react-native";


import Screen from "../Component/Screen";
import Apptext from "../Component/Apptext";
import ProfileComponent from "../Component/ProfileComponent";

import IconComponent from "../Component/IconComponent";
import SearchComponent from "../Component/SearchComponent";

import AppLogo from "../Component/Applogo"

import useResult from "../Hooks/useResults"
import { StatusBar } from "expo-status-bar";

export default function HomeScreen() {
  const [term , setTerm] = useState('');
  const [SearchAPI , result , errorMessage ] = useResult();
 


  return (
       
   
    <Screen style={styles.screen} >
     <View style={styles.curve} >
      <View style={styles.Container}>
        <IconComponent />
        
 <AppLogo />
         
     <ProfileComponent />
       
      </View>
      <Apptext style={styles.title}> Food & Restaurants in </Apptext>
      <Apptext style={styles.title1}> your city </Apptext>
      <SearchComponent tern={term} onTermchange={setTerm} 
        onTermsubmit={()=> SearchAPI(term)} />
        { errorMessage ? <Text> {errorMessage} </Text> : null}
     </View>
     <StatusBar style="auto" style="dark" />
      
    </Screen>
    
  );
}
const styles = StyleSheet.create({
curve:{
      backgroundColor: "#b2deec" ,
     borderBottomRightRadius: 100 ,
     height: "60%",
     shadowOffset:  {
      width: 5 , 
      height: 2
    },
    shadowOpacity: 0.1 ,

    shadowRadius: 2
  },
  icon: {
    marginLeft: 10,
    color: "orangered",
  },
  Container: {
    flexDirection: "row",
    justifyContent: "space-between",
    top: 40,
    alignItems: "center",
  },
  title: {
    fontSize: 25,
    marginTop: 70,
    marginLeft: 12,
    fontFamily: "nunito-italic",
  },
  title1: {
    fontSize: 25,
    marginTop: 1,
    marginLeft: 12,
    fontFamily: "nunito-italic",
  },
  text: {
    fontSize: 25,
    fontWeight: "700",
    fontFamily: "nunito-semibold",
  },
  screen: {
   }
});
