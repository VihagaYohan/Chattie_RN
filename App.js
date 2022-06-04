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
import { Provider } from 'react-redux'

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
  const [currentTheme, setCurrentTheme] = useState();
  const reduxState = store.getState();
  let { mode } = reduxState.theme;
  let theme = mode.mode;
  console.log('theme', theme)

  console.log('default theme', DefaultTheme)

  useEffect(() => {
    getTheme();
  }, [])

  // get async storage theme
  const getTheme = async () => {
    let result = await getData(keys.THEME);
    console.log('async ', result)
    setCurrentTheme(result)
    return result;
  }

  const MyTheme = {
    ...DefaultTheme,
    dark: currentTheme === 'light-mode' ? false : true,
    colors: {
      ...DefaultTheme.colors,
      primary: '#0AD285',
      background: currentTheme === 'light-mode' ? 'white' : 'black',
      border: 'red'
    },
  };

  return (
    <Provider store={store}>
      <NavigationContainer theme={MyTheme}>
        <BottomNavigator />
      </NavigationContainer>
    </Provider>
  );
};



export default App;
