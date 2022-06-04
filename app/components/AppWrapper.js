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
    const theme = useSelector(state => state.theme)

    const [currentTheme, setCurrentTheme] = useState();

    useEffect(()=>{
        getTheme();
    },[])

    // get currnet theme
    const getTheme = async ()=>{
        let result = await getData(keys.THEME);
        setCurrentTheme(result)
    }

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
    },
    innerContainerStyle: {
        flex: 1,
        //backgroundColor: colors.primaryWhite
    }
})

export default AppWrapper;