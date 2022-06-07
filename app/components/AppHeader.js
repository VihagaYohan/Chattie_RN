import React, { Component } from 'react'
import {StyleSheet,View,TouchableOpacity,Image} from 'react-native'

// hooks
import {useTheme} from '../hooks/index'

const AppHeader = ()=>{
    const [theme,setTheme] = useTheme('light-mode');
    console.log('theme',theme)

    return(
        <View style={styles(theme).container}>

        </View>
    )
}

const styles = colors => StyleSheet.create({
    container:{
        backgroundColor:colors === 'light-mode' ? 'red' :'blue',
        width:100,
        height:100
    }
})

export default AppHeader;