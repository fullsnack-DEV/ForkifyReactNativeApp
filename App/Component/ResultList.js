import { NavigationContainer } from '@react-navigation/native'
import React from 'react'
import { View, Text  , StyleSheet , FlatList, ScrollView , TouchableOpacity} from 'react-native'
import ResultDetail from './ResultDetail'


export default  function ResultList({title , results , navigation}) {
    return (
        <View>
          <ScrollView> 
            <Text style={styles.title}> {title} </Text>
             <FlatList 
              horizontal
              showsHorizontalScrollIndicator={false}
              data={results}
              keyExtractor={result => result.id}
              renderItem = {({item}) => ( 
                  <TouchableOpacity onPress={()=> navigation.navigate("DetailScreen" , 
                  {id :item.id})}>
                      <ResultDetail  result={item}   />
                     </TouchableOpacity>
              )}
               />
               </ScrollView>
        </View>
    )
}
  
const styles = StyleSheet.create({
     title: {
         fontFamily: "nunito-italic", 
         fontSize: 20 , 
         color: "white",
         marginVertical: 10
     }
})