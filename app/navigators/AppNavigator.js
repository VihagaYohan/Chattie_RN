import React, { Component } from 'react'
import { createStackNavigator } from '@react-navigation/stack'

// screens
import { HomeScreen, ConversationScreen, SearchUsersScreen, } from '../screens'

// navigators
import { BottomNavigator, AuthNavigator } from '../navigators'

const Stack = createStackNavigator();

const Navigator = () => {
    return (
        <Stack.Navigator initialRouteName='Bottom'
            screenOptions={{
                headerShown: false
            }}>
            <Stack.Screen name="Auth" component={AuthNavigator} />
            <Stack.Screen name="Bottom" component={BottomNavigator} />
            <Stack.Screen name="ConversationScreen" component={ConversationScreen} />
        </Stack.Navigator>
    )
}

export default Navigator;