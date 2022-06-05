/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */
import 'react-native-gesture-handler';
import React, { useEffect, useState } from 'react';
import type { Node } from 'react';
import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  useColorScheme,
  View,
} from 'react-native';
import { NavigationContainer, DefaultTheme } from '@react-navigation/native';
import { Provider, useSelector } from 'react-redux'

import { utils, constants } from './app/utils'
const { getData } = utils;
const { keys } = constants

// redux store
import { store } from './app/store/store'

// screens
import HomeScreen from './app/screens/HomeScreen'

// navigators
import { BottomNavigator } from './app/navigators'



const App = () => {
  let { theme } = store.getState()?.theme;

  const [mode, setMode] = useState()


  const getCurrentTheme = async () => {
    let result = await getData(keys.THEME);
    setMode(result)
    console.log(result)
  }

  useEffect(() => {
    getCurrentTheme();
  }, [])

  useEffect(()=>{},[mode])



  const MyTheme = {
    ...DefaultTheme,

    colors: {
      ...DefaultTheme.colors,
      primary: 'rgb(255, 45, 85)',
      background: mode == 'light-mode' ? 'white' : 'black'
    },
  };


  return (
    <Provider store={store}>
      <NavigationContainer>
        <BottomNavigator />
      </NavigationContainer>
    </Provider>
  );
};



export default App;
