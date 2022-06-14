import React, { Component } from 'react'
import {createStackNavigator} from '@react-navigation/stack'

// screens
import {ConversationScreen, SampleScreen} from '../screens'

const Stack = createStackNavigator();

const Navigator = ()=>{
    return(
        <Stack.Navigator initialRouteName='Sample'>
            <Stack.Screen name="Conversation" component={ConversationScreen}/>
            <Stack.Screen name="Sample" component={SampleScreen}/>
        </Stack.Navigator>
    )
}

export default Navigator;