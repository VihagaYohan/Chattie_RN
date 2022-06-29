import React, { Component } from 'react'
import { StyleSheet, View, Text } from 'react-native'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import { useSelector } from 'react-redux'

// screens
import { HomeScreen, StatusScreen, SettingsScreen, ConversationScreen, SearchUsersScreen } from '../screens'

// components
import { CustomIcons } from '../components'

// constants
import { colors, appStyles, fonts, constants } from '../utils'

const Tab = createBottomTabNavigator();

const { FontAwesomeIcon, IoniconsIcon } = CustomIcons

const Navigator = () => {
    const { theme } = useSelector(state => state.theme)

    return (
        <Tab.Navigator initialRouteName='Home' tabBarOptions={{
            showLabel: false,
            activeTintColor: colors.primaryPurple,
            inactiveTintColor: colors.darkGray1,
            style: {
                position: 'absolute',
                bottom: 10,
                left: 10,
                right: 10,
                elevation: 0,
                backgroundColor: theme === 'light-mode' ? colors.primaryWhite : colors.primaryBlack,
                borderRadius: 15,
                height: 60,
                ...appStyles.shadow
            }
        }}>
            <Tab.Screen name="Home" component={HomeScreen}
                options={{
                    tabBarIcon: ({ focused, color, size }) => (
                        <View style={{
                            justifyContent: 'center',
                            alignItems: 'center'
                        }}>
                            <IoniconsIcon
                                name="ios-chatbubbles"
                                size={size}
                                color={color} />

                            <Text style={[styles(theme).tabLabel,
                            { color: color }]}>Chats</Text>
                        </View>
                    )
                }} />
            <Tab.Screen name="Status" component={StatusScreen} options={{
                tabBarIcon: ({ focused, color, size }) => (
                    <View style={{
                        justifyContent: 'center',
                        alignItems: 'center'
                    }}>
                        <IoniconsIcon
                            name="ios-call"
                            size={size}
                            color={color} />

                        <Text style={[styles(theme).tabLabel,
                        { color: color }]} >Calls</Text>
                    </View>
                )
            }} />
            <Tab.Screen name="Settings" component={SettingsScreen} options={{
                tabBarIcon: ({ focused, color, size }) => (
                    <View style={{
                        justifyContent: 'center',
                        alignItems: 'center'
                    }}>
                        <FontAwesomeIcon
                            name="gear"
                            size={size}
                            color={color} />

                        <Text style={[styles(theme).tabLabel,
                        { color: color }]}>Settings</Text>
                    </View>
                )
            }} />
        </Tab.Navigator>
    )
}

const styles = theme => StyleSheet.create({
    tabLabel: {
        fontSize: fonts.small,
        fontFamily: fonts.regularFont
    }
})

export default Navigator;