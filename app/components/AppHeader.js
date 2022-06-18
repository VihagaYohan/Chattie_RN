import React, { Component } from 'react'
import { StyleSheet, View, TouchableOpacity, Image } from 'react-native'
import {useSelector} from 'react-redux'

// hooks
import { useTheme } from '../hooks/index'

// utils
import { constants, mode } from '../utils'

// components
import { CustomText } from '../components'

const { BoldText,RegularText } = CustomText
const { gap } = constants

const AppHeader = ({ title, constainerStyle, rightIcon = false, rightIconImage }) => {
   const {theme} = useSelector(state => state.theme)

    return (
        <View style={[styles(theme).container, constainerStyle]}>
            <BoldText>{title}</BoldText>
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

const styles = theme => StyleSheet.create({
    container: {
        backgroundColor:theme=='light-mode'?mode.lightTheme.backgroundColor:
        mode.darkTheme.backgroundColor,
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