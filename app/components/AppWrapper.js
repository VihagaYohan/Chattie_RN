import React, { Component,useEffect,useState } from 'react'
import { StyleSheet, ScrollView, SafeAreaView } from 'react-native'
import { useSelector } from 'react-redux'
import theme from '../store/Reducers/theme'

// utilities
import { constants, colors,utils } from '../utils'

const { screenWidth, screenHeight,keys } = constants
const {getData} = utils;

const AppWrapper = ({ parentContainerStyle = {},
    innerContainerStyle = {},
    children }) => {
    const {theme} = useSelector(state => state.theme)

    return (
        <SafeAreaView style={[styles(theme).container, parentContainerStyle]}>
            <ScrollView 
            showsVerticalScrollIndicator={false}
            style={[styles(theme).innerContainerStyle, innerContainerStyle]}>{children}</ScrollView>
        </SafeAreaView>
    )
}

const styles = theme => StyleSheet.create({
    container: {
        widht: screenWidth,
        height: screenHeight,
        backgroundColor:theme == 'light-mode' ? colors.primaryWhite : colors.primaryBlack
    },
    innerContainerStyle: {
        flex: 1,
        backgroundColor: theme == 'light-mode' ? colors.primaryWhite : colors.primaryBlack
    }
})

export default AppWrapper;