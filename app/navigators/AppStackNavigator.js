import React, { Component } from 'react'
import {createStackNavigator} from '@react-navigation/stack'

// screens
import {ConversationScreen, SampleScreen,
SearchUsersScreen,
HomeScreen} from '../screens'

// utils
import {utils,constants} from '../utils'

const {getData} = utils

const Stack = createStackNavigator();

const Navigator = ()=>{

    return(
        <Stack.Navigator initialRouteName='Home' screenOptions={{
            headerShown:false
        }}>
            <Stack.Screen name="Home" component={HomeScreen}/>
            <Stack.Screen name="SearchUser" component={SearchUsersScreen}/>
            <Stack.Screen name="Conversation" component={ConversationScreen}/>
        </Stack.Navigator>
    )
}

export default Navigator;