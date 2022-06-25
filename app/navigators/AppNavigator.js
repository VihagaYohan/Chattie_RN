import React, { Component } from 'react'
import { createStackNavigator } from '@react-navigation/stack'

// navigators
import {
    AuthNavigator,
    BottomNavigator
} from './index'
import { StackActions } from '@react-navigation/native';

const Stack = createStackNavigator();

const Navigator = () => {
    return (
        <Stack.Navigator
            screenOptions={{
                headerShown: false
            }}>
            <Stack.Screen
                name="Auth"
                component={AuthNavigator} />
            <Stack.Screen
                name="App"
                component={
                    BottomNavigator
                } />
        </Stack.Navigator>
    )
}

export default Navigator;