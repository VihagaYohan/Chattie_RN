import React, { Component } from 'react'
import { StyleSheet, ScrollView, SafeAreaView } from 'react-native'
import { useSelector } from 'react-redux'
import theme from '../store/Reducers/theme'

// utilities
import { constants, colors } from '../utils'

const { screenWidth, screenHeight } = constants

const AppWrapper = ({ parentContainerStyle = {},
    innerContainerStyle = {},
    children }) => {
    const theme = useSelector(state => state.theme)

    return (
        <SafeAreaView style={[styles(theme).container, parentContainerStyle]}>
            <ScrollView style={[styles(theme).innerContainerStyle, innerContainerStyle]}>{children}</ScrollView>
        </SafeAreaView>
    )
}

const styles = theme => StyleSheet.create({
    container: {
        widht: screenWidth,
        height: screenHeight,
    },
    innerContainerStyle: {
        flex: 1,
        backgroundColor: theme.mode == "light-mode" ? colors.primaryWhite : colors.primaryBlack
    }
})

export default AppWrapper;