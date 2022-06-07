import React, { Component,useEffect,useRef } from 'react'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import {useDispatch} from 'react-redux'

// screens
import {HomeScreen,StatusScreen,SettingsScreen} from '../screens'

// utils
import { utils,constants } from '../utils';

// reducers
import {changeTheme} from '../store/Reducers/theme'

const{getData} = utils
const {keys} = constants

// redux

const Tab = createBottomTabNavigator();

const Navigator = ()=>{
    let currentTheme = useRef();
    const dispatch = useDispatch();


    useEffect(()=>{
        getTheme().then(r => {
            dispatch(changeTheme(r))
        }).catch(e => {
            console.log('e',e)
        });
    },[])

    // get current theme from async storage
    const getTheme = async()=>{
        let theme = await getData(keys.THEME)
        if (theme == null || undefined){
            currentTheme = 'light-mode';
            return currentTheme;
        }
        return theme;
    }


    return(
        <Tab.Navigator>
            <Tab.Screen name="Home" component={HomeScreen}/>
            <Tab.Screen name="Status" component={StatusScreen}/>
            <Tab.Screen name="Settings" component={SettingsScreen}/>
        </Tab.Navigator>
    )
}

export default Navigator;