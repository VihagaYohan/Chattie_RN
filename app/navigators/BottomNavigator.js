import React, { Component, useEffect, useRef } from 'react'
import {View,Animated} from 'react-native'
import { createBottomTabNavigator,useBottomTabBarHeight } from '@react-navigation/bottom-tabs';
import { useDispatch,useSelector } from 'react-redux'

// screens
import { HomeScreen, StatusScreen, SettingsScreen } from '../screens'

// navigators
import {ChatNavigator} from '../navigators'

// components
import { CustomIcons } from '../components'

// utils
import { utils, constants, colors } from '../utils';

// reducers
import { changeTheme } from '../store/Reducers/theme'
import IconButton from 'react-native-vector-icons/dist/lib/icon-button';

const { getData } = utils
const { keys } = constants
const { EntypoIcon, FontAwesomeIcon, IoniconsIcon } = CustomIcons

// redux

const Tab = createBottomTabNavigator();

const Navigator = () => {
    let currentTheme = useRef();
    const dispatch = useDispatch();

    const {theme} = useSelector(state => state.theme)

    //const tabBarHeight = useBottomTabBarHeight(); // tab bar height
    //console.log('tabbar height', tabBarHeight)


    useEffect(() => {
        getTheme().then(r => {
            dispatch(changeTheme(r))
        }).catch(e => {
            console.log('e', e)
        });
    }, [])

    // get current theme from async storage
    const getTheme = async () => {
        let theme = await getData(keys.THEME)
        if (theme == null || undefined) {
            currentTheme = 'light-mode';
            return currentTheme;
        }
        return theme;
    }


    return (
        <React.Fragment>

            
        <Tab.Navigator 
        initialRouteName='Chats'   
        tabBarOptions={{
            activeTintColor: colors.primaryPurple,
            inactiveTintColor: colors.primaryGray,
            labelPosition:"below-icon",
            style:{
                backgroundColor:theme === 'light-mode' ? colors.primaryWhite:colors.primaryBlack,
                borderWidth:1,
                height:50
            }
        }}>
            <Tab.Screen name="Home" component={HomeScreen}
                options={{
                    title: "Chats",
                    tabBarIcon: ({ focused, color, size }) => {
                        
                        return (
                            <IoniconsIcon
                                name="chatbubbles"
                                color={color}
                                size={size} />
                        )
                    }
                }} />
            <Tab.Screen name="Status" component={ChatNavigator} 
              options={{
                title: 'Settings',
                tabBarIcon: ({ focused, color, size }) => {
                    return (
                        <IoniconsIcon
                            name="ios-call"
                            color={color}
                            size={size} />
                    )
                }
            }} 
            listeners={{
                tabPress:e => {
                    console.log(e)
                }
            }}/>

            <Tab.Screen name="Settings" component={SettingsScreen}
                options={{
                    title: 'Settings',
                    tabBarIcon: ({ focused, color, size }) => {
                        return (
                            <IoniconsIcon
                                name="settings"
                                color={color}
                                size={size} />
                        )
                    }
                }} />
        </Tab.Navigator>
{/* 
        <View style={{
                width:constants.screenWidth/3,
                height:5,
                backgroundColor:'red',
               position:'absolute',
                bottom:constants.screenHeight - (constants.screenHeight-50),
                left:0
                ,alignSelf:'center',
            }}></View> */}
        </React.Fragment>
    )
}

export default Navigator;