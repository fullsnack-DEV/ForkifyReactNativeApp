import React , {useState , useEffect} from 'react'
import { View, Text ,StyleSheet  , StatusBar} from 'react-native'
import Screen from '../Component/Screen'
import { Dimensions } from 'react-native';
import yelp from "../API/yelp"


 const {width , height} = Dimensions.get("window");


export default function DetailScreen({route}) {
  const id = route.params.id 
  const [ result , Setresult] = useState(null);
 

  const getResult = async (id) => {
  const response  = await yelp.get(`/${id}`)
   Setresult(response.data)
 }
  //To exactly call it once we are using a UseEffct Hook
  useEffect(() => {
    getResult(id)
 },[])

  return (
         <Screen style={styles.screen}>
             <StatusBar style="auto" style="dark" />
             <View style={styles.demo}>
               <Text>Hii</Text>
             </View>
                    
         
             <View style={styles.demo1}> 
             
             </View>
         </Screen>
    )
}

const styles = StyleSheet.create({
    //  demo :{
    //        backgroundColor: "red" ,
    //         height: "55%",
    //         borderBottomRightRadius: 80 , 
    //  },
     demo1: {
           backgroundColor: "yellow" , 
           borderTopLeftRadius:80,
         
            height:"55%"
           
           
           
     } ,
     screen: {
     backgroundColor: "#373a40",
    }
})