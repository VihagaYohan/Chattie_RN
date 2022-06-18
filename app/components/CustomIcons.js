import React, { Component } from 'react'
import {StyleSheet,View,Text} from 'react-native'
//import {Entypo,FontAwesome} from 'react-native-vector-icons'
import Entypo from 'react-native-vector-icons/Entypo'
import FontAwesome from 'react-native-vector-icons/FontAwesome'
import Ionicons from 'react-native-vector-icons/Ionicons'
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5'

import {colors,constants} from '../utils'

const {iconSize} = constants

export const EntypoIcon = ({
    name,
    color=colors.primaryBlack,
    size=iconSize,
    onPress=()=>{return}
})=>{
    return(
        <Entypo 
        name={name}
        size={size}
        color={color}
        onPress={onPress}/>
    )
}

export const FontAwesomeIcon = ({
    name,
    color=colors.primaryBlack,
    size=iconSize,
    onPress=()=>{return}
})=>{
    return(
        <FontAwesome 
        name={name}
        size={size}
        color={color}
        onPress={onPress}/>
    )
}

export const IoniconsIcon = ({
    name,
    color=colors.primaryBlack,
    size=iconSize,
    onPress=()=>{return}
})=>{
    return(
        <Ionicons 
        name={name}
        size={size}
        color={color}
        onPress={onPress}/>
    )
}

export const FontAwesomeIcon5 = ({
    name,
    color=colors.primaryBlack,
    size=iconSize,
    onPress=()=>{return}
})=>{
    return(
        <FontAwesome5 
        name={name}
        size={size}
        color={color}
        onPress={onPress}/>
    )
}


export default {
    EntypoIcon,
    FontAwesomeIcon,
    IoniconsIcon,
    FontAwesomeIcon5
}