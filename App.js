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
import { BottomNavigator, AuthNavigator,
AppNavigator } from './app/navigators'

const App = () => {
  return (
    <Provider store={store}>
      <NavigationContainer>
        <AppNavigator/>
      </NavigationContainer>
    </Provider>
  );
};



export default App;
