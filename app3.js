import 'react-native-gesture-handler';

import React,{Component,useEffect,useState} from 'react';
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
} from 'react-native';
import {
  Colors,
  DebugInstructions,
  Header,
  LearnMoreLinks,
  ReloadInstructions,
} from 'react-native/Libraries/NewAppScreen';
import App2 from './app2';

export default function App (props)
{

  const[usrnm,setUsrnm] = useState('');
  
  const[pass,setPass]   = useState('');


   useEffect(()=> {
    GirisKontrol();
   },[]);
 
   const GirisKontrol = () => {
    try {
      AsyncStorage.getItem('isLogin')
      .then(value=>{
        if (value != null){
          props.navigation.navigate('Giriş');
          alert('başarıyla girildi.')
        }
        else if (value == null){
          alert('Asyncstorage boş')
        }
      }   
        )      
    } catch (error) {
      console.log(error);
    }
  } // giriş kontrol sonu

   const gitme = async () => {
     if(usrnm.length ==0 || pass.length ==0){
       alert('kullanıcı adı ve şifre girin.')
     }else {
    try {
      var user = {
        usrnm : usrnm,
        pass : pass
      };
       await AsyncStorage.setItem('isLogin', JSON.stringify(user));
       props.navigation.navigate('Giriş') 
       alert('başarıyla giriş yapıldı.')
     } catch (error) {
       console.log(error);
     }

   }
  }

   

 const kontroll = async () => { 
      //192.168.0.24   10.0.2.2
   
        axios.post('http://10.0.2.2:20035/api/Values/Kontrol',{
          usrnm : usrnm, 
          pass : pass
         })
        .then((res)=>{
      // var ab = JSON.parse(res);
   
        if (res.data === true){
          gitme();
        }
        else {
          alert("kullanıcı bilgileri hatalı.")
        }
     })
      .catch((e)=>console.log(e)) 
          }

  return (


    <View>
 
 
    <View style = {style.title}>
      <Text style = {style.title_text}>Giriş formu</Text>
    </View>

    <View style = {style.container}> 
     <TextInput style = {style.input}
       value= {usrnm}
       onChangeText = {(e)=> setUsrnm(e)}
       placeholder = "Kullanıcı adı giriniz"
       placeholderTextColor="black"></TextInput>
         <TextInput style = {style.input}
       value= {pass}
       onChangeText = {(e)=> setPass(e)}
       placeholder = "Şifre giriniz."
       placeholderTextColor="black"
       secureTextEntry = {true}></TextInput>
       <TouchableOpacity style = {style.button} onPress = {kontroll}>
                   <Text style = {style.button_text}>Giriş yap</Text>
                    </TouchableOpacity>
      
   </View>
      </View>

  )
}

  const style = StyleSheet.create({

    container : { flex:1, backgroundColor:'#ddd', alignItems : 'center', justifyContent : 'center', marginTop: 250},
    title : {backgroundColor: 'blue', padding:25},
    title_text : {color:'white' , textAlign : 'center', fontSize : 25, },
    input : {width:270, height:40, borderWidth:2, backgroundColor : 'white', borderRadius:10,fontSize:15,marginBottom:15},
    button : { width:135 , height:40, borderWidth:2, backgroundColor : 'white', borderRadius : 10, marginBottom : 15 },
    button_text : {fontSize: 15, backgroundColor:'white' , color:'black' , textAlign:'center', marginTop : 6  }
     });