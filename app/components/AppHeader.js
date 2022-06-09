import React, { Component } from 'react'
import { StyleSheet, View, TouchableOpacity, Image } from 'react-native'

// hooks
import { useTheme } from '../hooks/index'

// utils
import { constants, mode } from '../utils'

// components
import { CustomText } from '../components'

const { BoldText,RegularText } = CustomText
const { gap } = constants

const AppHeader = ({ title, constainerStyle, rightIcon = false, rightIconImage }) => {
    const [theme, setTheme] = useTheme('light-mode');
    console.log('theme', theme)

    return (
        <View style={[styles(theme).container, constainerStyle]}>
            <BoldText>Pinned Chats</BoldText>
            {
                rightIcon === true && (
                    <TouchableOpacity style={styles(theme).iconContainer}>
                        <Image style={styles(theme).rightIconStyle}
                            source={{ uri: rightIconImage }} />
                    </TouchableOpacity>
                )
            }
        </View>
    )
}

const styles = colors => StyleSheet.create({
    container: {
        backgroundColor: colors === 'light-mode' ? mode.lightTheme.backgroundColor : mode.darkTheme.backgroundColor,
        width: "100%",
        flexDirection: 'row',
        alignItems: 'center'
    },
    iconContainer: {
        width: constants.gap * 2.2,
        height: constants.gap * 2.2,
        borderRadius: (constants.gap * 2.2) / 2,
        overflow: 'hidden'
    },
    rightIconStyle: {
        width: '100%',
        height: '100%'
    }
})

export default AppHeader;