import React, { Component } from 'react'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

// screens
import {HomeScreen,StatusScreen,SettingsScreen} from '../screens'

const Tab = createBottomTabNavigator();

const Navigator = ()=>{
    return(
        <Tab.Navigator>
            <Tab.Screen name="Home" component={HomeScreen}/>
            <Tab.Screen name="Status" component={StatusScreen}/>
            <Tab.Screen name="Settings" component={SettingsScreen}/>
        </Tab.Navigator>
    )
}

export default Navigator;