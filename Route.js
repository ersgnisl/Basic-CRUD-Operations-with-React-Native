import React,{Component} from "react";
import {createAppContainer} from "react-navigation";
import type {Node} from 'react';
import PropTypes from 'prop-types';
import{createStackNavigator} from "react-navigation-stack";
import App from "./App";
import App2 from "./app2";
import App3 from "./app3";


export const AppNavigator = createStackNavigator({
    Home : {
      screen: App3
    },
    Giriş : {
      screen: App2
    }
  })   

  export default createAppContainer(AppNavigator);