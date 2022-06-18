import React, { Component } from 'react'
import {createStackNavigator} from '@react-navigation/stack'

// screens
import {LoginScreen} from '../screens'

// navigators
import {BottomNavigator} from '../navigators'

const Stack = createStackNavigator();

const Navigator = ()=> {
    return(
        <Stack.Navigator screenOptions={{
            headerShown:false
        }}>
            <Stack.Screen name="Login" component={LoginScreen}/>
            <Stack.Screen name="BottomNavigator" component={BottomNavigator}/>
        </Stack.Navigator>
    )
}

export default Navigator;