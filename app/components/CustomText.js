import React, { Component } from 'react'
import { StyleSheet, Text } from 'react-native'

// utility
import { fonts, colors } from '../utils'

// bold text
export const BoldText = ({ children, style,...props }) => {
    return (
        <Text style={[styles.boldText,
            style]} {...props}>{children}</Text>
    )
}

// regular text
export const RegularText = ({children, style, ...props})=>{
    return(
        <Text style={[styles.regularText,style]} 
        {...props}>{children}</Text>
    )
}

const styles = StyleSheet.create({
    boldText: {
        fontFamily:fonts.boldFont,
        fontSize:fonts.extraLarge,
        color:colors.primaryPurple
    },
    regularText:{
        fontFamily:fonts.regularFont,
        fontSize:fonts.regular,
        color:colors.primaryPurple
    }
})

export default {
    BoldText,
    RegularText
}