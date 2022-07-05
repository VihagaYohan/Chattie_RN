import React, { Component } from 'react'
import { createStackNavigator } from '@react-navigation/native'

// screens
import { LoginScreen, RegisterScreen } from '../screens/'

const Stack = createStackNavigator();

const Navigator = () => {
    return (
        <Stack.Navigator
            screenOptions={{
                headerShwon: false
            }}>
            <Stack.Screen name="LoginScreen"
                Component={LoginScreen} />

            <Stack.Screen name="RegisterScreen"
                Component={RegisterScreen} />
        </Stack.Navigator>
    )
}

export default Navigator;