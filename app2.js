import 'react-native-gesture-handler';
import React,{Component,useState,useEffect} from 'react';
import type {Node} from 'react';
import PropTypes from 'prop-types';
import axios, { Axios } from 'axios';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  useColorScheme,
  View,
  TouchableOpacity,
  TextInput,
  FlatList,
  Image,
  ActivityIndicator
} from 'react-native';

import {
  Colors,
  DebugInstructions,
  Header,
  LearnMoreLinks,
  ReloadInstructions,
} from 'react-native/Libraries/NewAppScreen';
import App3 from './app3';
import { set, Value } from 'react-native-reanimated';
import ActivityIndicatorViewNativeComponent from 'react-native/Libraries/Components/ActivityIndicator/ActivityIndicatorViewNativeComponent';


export default function App2(props){
  const [data , setData] = useState([]);
  const [isLoading, setisLoading] = useState(true);


useEffect(()=>{
  GetListPhotos();
  return () => {
  }
},[])


  GetListPhotos = () => {
    const apiURL = 'https://jsonplaceholder.typicode.com/photos';
    fetch(apiURL)
    .then((res) => res.json())
    .then((resJson)=> {
     // setData(resJson)
          setData(resJson.slice(5))
    //  setData(resJson.slice(1,5))
      console.log(resJson);
    }).catch((error) => {
      console.log(error);
    }).finally(()=>{
      setisLoading(false);
    })
  }
  const Cikis = async () => {
    try {
  await  AsyncStorage.removeItem('isLogin')
  props.navigation.navigate('Home'); 
    } catch (error) {
   console.log(error);
  }
      };


      renderItem = ({item,index}) => {
        return (
      <View style = {style.item}>
        <Image
        style = {style.image}
        source = {{uri: item.url}}
        resizeMode = 'contain'
        />
        <View style = {style.wrapTest}>
          <Text style = {style.fontSize}>{index + '.' + item.title}</Text>

        </View>

      </View>

        )

      }
      
    return (
       <SafeAreaView style = {style.container}>

         {isLoading ? <ActivityIndicator/>: (
           <FlatList
           data = {data}
           keyExtractor = {item => 'key-${item.id}'}
           renderItem = {renderItem}
           contentContainerStyle={{
             padding:20,

           }}
           />
         )}
         
         
       <Text style = {style.text_type}>Giriş yaptınız</Text>
       <TouchableOpacity style = {style.button} onPress = {Cikis}>
                   <Text style = {style.button_text}>Çıkış Yap</Text>
                    </TouchableOpacity>
       </SafeAreaView>
     )
   

}
      
// export default class App2 extends React.Component {
//     constructor(){
//         super();
//           this.state = {
//           } 
//     }

//     render(){
 
//      return (
//         <View><Text>Giriş yaptınız.</Text>
//         </View>
//       )
//     }
//     }
const style = StyleSheet.create({
  text_type : {color:'black' , textAlign : 'center', fontSize : 25 , marginBottom:10},
  container : { flex:1},
  button : { width:135 , height:40, borderWidth:2, backgroundColor : 'white', borderRadius : 10, marginBottom : 10,marginLeft:130 },
  button_text : {fontSize: 15, backgroundColor:'white' , color:'black' , textAlign:'center', marginTop : 6  },
  fontSize : {fontSize:18},
  image: {width:100,height:100},
  wrapTest: {flex:1,marginLeft:10, justifyContent:'center'},
  item:{flexDirection:'row', marginBottom:20,borderRadius:10,backgroundColor:'#fff', shadowColor:'#0000',shadowOffset:{width:0 ,height:10},shadowOpacity:.3,shadowRadius:20,padding:10}
   });