import React, { Component } from 'react'
import { StyleSheet, View, Text } from 'react-native'
//import {Entypo,FontAwesome} from 'react-native-vector-icons'
import Entypo from 'react-native-vector-icons/Entypo'
import FontAwesome from 'react-native-vector-icons/FontAwesome'
import Ionicons from 'react-native-vector-icons/Ionicons'
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5'

import { colors, constants } from '../utils'

const { iconSize } = constants

export const EntypoIcon = ({
    name,
    color = colors.primaryBlack,
    size = iconSize,
    ...props
}) => {
    return (
        <Entypo
            name={name}
            size={size}
            color={color}
            {...props} />
    )
}

export const FontAwesomeIcon = ({
    name,
    color = colors.primaryBlack,
    size = iconSize,
    ...props
}) => {
    return (
        <FontAwesome
            name={name}
            size={size}
            color={color}
            {...props} />
    )
}

export const IoniconsIcon = ({
    name,
    color = colors.primaryBlack,
    size = iconSize,
    ...props
}) => {
    return (
        <Ionicons
            name={name}
            size={size}
            color={color}
            {...props} />
    )
}

export const FontAwesomeIcon5 = ({
    name,
    color = colors.primaryBlack,
    size = iconSize,
    ...props
}) => {
    return (
        <FontAwesome5
            name={name}
            size={size}
            color={color}
            {...props} />
    )
}


export default {
    EntypoIcon,
    FontAwesomeIcon,
    IoniconsIcon,
    FontAwesomeIcon5
}