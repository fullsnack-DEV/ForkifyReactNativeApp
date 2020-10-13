import React from "react";
import { View, Text, StyleSheet, TextInput } from "react-native";
import { TouchableOpacity } from "react-native-gesture-handler";

import SearchIcon from "./SearchIcon";

export default function SearchComponent({term , onTermchange , onTermsubmit}) {
    
       
  return (
    <View style={styles.container}>
  
      <View style={styles.Search}>
        <TextInput style={styles.text} placeholder="Search" 
        autoCapitalize="none"
        autoCorrect={false}
         value={term}
         onChangeText={(newTerm)=> onTermchange(newTerm)}
        //  onEndEditing={()=> onTermsubmit()}
        />
      </View>
     
      <SearchIcon    
        ontermsubmit={onTermsubmit}
       />
    </View>
  );
}

const styles = StyleSheet.create({
  Search: {
    backgroundColor: "#F0EEEE",
    height: 45,
    width: "70%",
    borderRadius: 10,

    marginTop: "6%",
    marginLeft: "4%",
    
  },
  text: {
    left: "10%",
    fontFamily: "nunito-bold",
    fontSize: 20,
    flex: 1,
    width: "80%",
  },
  container: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
 
});
