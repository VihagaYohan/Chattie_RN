import React, { Component, useState, useEffect } from 'react'
import { createStackNavigator } from '@react-navigation/stack'

// navigators
import {
    AuthNavigator,
    BottomNavigator
} from './index'
import { StackActions } from '@react-navigation/native';

// utils
import { utils, constants } from '../utils'

const { getData } = utils

const Stack = createStackNavigator();

const Navigator = () => {
    const [isLoggedIn, setIsLoggedIn] = useState(false);

    useEffect(() => {
        checkLogin();
    }, [])

    // check if the user already logged-in
    const checkLogin = async () => {
        let result = await getData(constants.keys.ACCESS_TOKEN);
        console.log('result',result)
        if (result == undefined || null) {
            setIsLoggedIn(false)
        } else {
            setIsLoggedIn(true)
        }
    }
    return (
        <Stack.Navigator
            initialRouteName={isLoggedIn === true ? 'App' : "Auth"}
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