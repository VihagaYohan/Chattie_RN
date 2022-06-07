import React, { Component, useState } from 'react'
import { StyleSheet, View, Text, Button, TouchableOpacity } from 'react-native'
import { useDispatch, useSelector } from 'react-redux'
import { changeTheme } from '../store/Reducers/theme'
import Icon from 'react-native-vector-icons/FontAwesome5'
import { useTheme } from '@react-navigation/native'


// utility
import { utils, mode as themeMode, constants,appStyles} from '../utils'

// components
import { AppWrapper } from '../components'

import Comment from '../../assets/images/Vector.svg'

const { getData, storeData } = utils
const { keys, screenWidth, screenHeight } = constants
const { lightTheme, darkTheme } = themeMode

const Screen = () => {
    console.log(appStyles)
    return (
        <AppWrapper>
           <View style={styles({},"light-mode").box}></View>
        </AppWrapper>
    )
}

const styles = (colors={}, mode="") => StyleSheet.create({
    container: {
    
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: colors.backgroundColor
        
    },
    button: {
        borderWidth: 1,
        paddingVertical: 10,
        marginVertical: 10,
        backgroundColor: colors.mode == 'light-mode' ? 'white' : 'black'
    },
    text: {
        color: colors.mode === 'light-mode' ? 'black' : 'white',// colors.primaryColor
    },
    box:{
        width:100,
        height:100,
        borderWidth:1,
       ...appStyles.styles.background
    }
})

export default Screen;