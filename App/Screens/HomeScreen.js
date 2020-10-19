import React , {useState , useEffect} from "react";
import { View, Text, StyleSheet ,  ScrollView } from "react-native";


import Screen from "../Component/Screen";
import Apptext from "../Component/Apptext";
import ProfileComponent from "../Component/ProfileComponent";

import IconComponent from "../Component/IconComponent";
import SearchComponent from "../Component/SearchComponent";

import AppLogo from "../Component/Applogo"

import useResult from "../Hooks/useResults"
import { StatusBar } from "expo-status-bar";
import ResultList from "../Component/ResultList";

export default function HomeScreen({navigation}) {
  const [term , setTerm] = useState('');
  const [SearchAPI , result , errorMessage ] = useResult();

  const Filterresultbyprice = (price) => {
    return result.filter(result => {
            return result.price === price;
  });
  };
 


  return (
       
   
    <Screen style={styles.screen} >
     <View style={styles.curve} >
      <View style={styles.Container}>
        <IconComponent />
        
 <AppLogo />
         
     <ProfileComponent />
         <StatusBar style="auto" style="dark" />
      </View>
      <Apptext style={styles.title}> Food & Restaurants in </Apptext>
      <Apptext style={styles.title1}> your city </Apptext>
      <SearchComponent tern={term} onTermchange={setTerm} 
        onTermsubmit={()=> SearchAPI(term)} />
        { errorMessage ? <Text> {errorMessage} </Text> : null}
     </View>
        <ScrollView> 
     <ResultList results={Filterresultbyprice('$')} title="Today's Special" navigation={navigation} />
       <ResultList results={Filterresultbyprice('$$')} title="Most Popular"  navigation={navigation} />
         <ResultList results={Filterresultbyprice('$$')} title="Top Rated"  navigation={navigation}/>
        </ScrollView>
    </Screen>
    
  );
}
const styles = StyleSheet.create({
curve:{
      backgroundColor: "#2a3d66" ,
     borderBottomRightRadius: 100 ,
     height: "35%",
     opacity: 1 ,
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
    color: "#fff"
  },
  title1: {
    fontSize: 25,
    marginTop: 1,
    marginLeft: 12,
    fontFamily: "nunito-italic",
    color: "#fff"
  },
  text: {
    fontSize: 25,
    fontWeight: "700",
    fontFamily: "nunito-semibold",
  },
  screen: {
     backgroundColor: "#373a40",
    }
});



//We are passing navigation prop to the resulrDetail component so that when user Click on the Image it will navigate the user to the  