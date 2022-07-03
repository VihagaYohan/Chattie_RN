import React, { Component,useState } from 'react'
import {StyleSheet,View,TouchableOpacity,Image} from 'react-native'

// hooks
import {useTheme} from '../hooks/'

// utils
import {constants,mode} from '../utils'

// components
import {CustomText,CustomIcons} from '../components/'

const {BoldText} = CustomText
const {FontAwesomeIcon} = CustomIcons

const AppHeader = ({isLeftIcon, leftIconName, 
title,
isRightIcon,
rightIconName})=>{
    const [theme, setTheme] = useState('light-mode');

    return(
        <View
        style={[styles(theme).container]}>
            {
                isLeftIcon && (
                    <FontAwesomeIcon
                    name={leftIconName}/>
                )
            }
            <BoldText>{title}</BoldText>
        </View>
    )
}

const styles = theme => StyleSheet.create({
    container:{
        flexDirection:'row',
        paddingVertical:constants.innerGap,
        alignItems:'center'
    }
})

export default AppHeader;