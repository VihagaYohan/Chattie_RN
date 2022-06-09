import React, { Component, useState } from 'react'
import { StyleSheet, View, Text, Button, TouchableOpacity } from 'react-native'
import { useDispatch, useSelector } from 'react-redux'
import { changeTheme } from '../store/Reducers/theme'
import Icon from 'react-native-vector-icons/FontAwesome5'
import { useTheme } from '@react-navigation/native'


// utility
import { utils, mode as themeMode, constants,appStyles} from '../utils'

// components
import { AppWrapper,CustomText,AppHeader } from '../components'

import Comment from '../../assets/images/Vector.svg'

const { getData, storeData } = utils
const { keys, screenWidth, screenHeight,innerGap } = constants
const { lightTheme, darkTheme } = themeMode
const {BoldText,RegularText} = CustomText

const Screen = () => {
    const store = useSelector(state => state.theme);
    const {theme} = store

    return (
        <AppWrapper parentContainerStyle={styles(theme).parentContainer}>

            <AppHeader 
            constainerStyle={styles(theme).headerCustomStyle}
            rightIcon={true}
            rightIconImage='https://randomuser.me/api/portraits/thumb/men/75.jpg'/> 
        </AppWrapper>
    )
}

const styles = (colors) => StyleSheet.create({
    parentContainer:{
        paddingHorizontal:constants.innerGap
    },
    headerCustomStyle:{
        justifyContent:'space-between',
        alignItems:"center"
    }
})

export default Screen;