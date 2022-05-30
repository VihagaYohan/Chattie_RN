/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */
import 'react-native-gesture-handler';
import React from 'react';
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
import { NavigationContainer } from '@react-navigation/native';
import { Provider } from 'react-redux'

// redux store
import { store } from './app/store/store'

// screens
import {HomeScreen,TutorialScreen} from './app/screens'

const App = () => {

  return (
    <Provider store={store}>
      <NavigationContainer>
        <TutorialScreen />
      </NavigationContainer>
    </Provider>
  );
};



export default App;
