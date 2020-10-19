import React from 'react'
import { View, Text , StyleSheet, Image , TouchableOpacity } from 'react-native'


export default function ResultDetail({result   }) {
    return (
               <View style={styles.card} >
            <Image style={styles.image} source={{uri:result.image_url}}  />
            
            <View >
          <Text style={styles.name}>{result.name}</Text>
          <Text style={styles.ratings}>  {result.rating} Stars , {result.review_count} Reviews</Text>
            </View>

            </View>
            
            
            
    )
}

const styles = StyleSheet.create({
    image: {
       width: 280 , 
    height: 155 , 
       borderRadius: 15,
       overflow: "hidden" , 
       } , 
    name: {
          fontSize: 18 , 
         marginLeft: 12 ,
         marginTop: 6,
        fontFamily: "nunito-italic" ,

        } ,

    card : { height: 220 , 
        width: 280, 
         marginVertical: 10 ,
        backgroundColor: "white",
       alignContent: "center", 
        borderRadius: 25 , 
        marginLeft:10 , 
     
        } , 
        ratings : {
             fontSize: 14 ,
               fontFamily: "nunito-italic" , 
               marginBottom: 15 , 
               marginLeft: 5
        }
})
