import React, { Component } from 'react'
import { createStackNavigator } from '@react-navigation/stack'

// screens
import { LoginScreen, RegisterScreen } from '../screens/'

const Stack = createStackNavigator();

const Navigator = () => {
    return (
        <Stack.Navigator initialRouteName="RegisterScreen"
            screenOptions={{
                headerShown: false
            }}>
            <Stack.Screen name="LoginScreen"
                component={LoginScreen} />

            <Stack.Screen name="RegisterScreen"
                component={RegisterScreen} />
        </Stack.Navigator>
    )
}

export default Navigator;