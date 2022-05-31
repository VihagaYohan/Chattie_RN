import React, { Component } from 'react'
import { StyleSheet, Text } from 'react-native'

// utility
import { fonts, colors } from '../utils'

// bold text
export const BoldText = ({ children, style }) => {
    return (
        <Text style={[styles.boldText,
            style]}>{children}</Text>
    )
}

const styles = StyleSheet.create({
    boldText: {
        fontFamily:fonts.boldFont,
        fontSize:fonts.extraLarge,
        color:colors.primaryBlack
    }
})