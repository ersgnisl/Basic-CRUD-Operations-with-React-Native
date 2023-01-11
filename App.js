
import 'react-native-gesture-handler';
import React,{Component} from 'react';
import type {Node} from 'react';
import PropTypes from 'prop-types';
import axios, { Axios } from 'axios';
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

import {createAppContainer} from "react-navigation";
import{createStackNavigator} from "react-navigation-stack";
import App3 from './app3';
import App2 from './app2';
import Route from './Route';

 export default function App() {

  
    return (
      <Route/>
    )
      
     
};
