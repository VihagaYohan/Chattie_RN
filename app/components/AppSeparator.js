import React, { Component, useState} from 'react'
import {StyleSheet,View} from 'react-native'

// hooks
import {useTheme} from '../hooks'

// constants
import {constants,colors} from '../utils'

const Separator = ()=> {
    const [theme, setTheme] = useState('light-mode')
    return(
        <View style={styles(theme).container}>

        </View>
    )
}

const styles = theme => StyleSheet.create({
    container:{
        height:2,
        width:'100%',
        backgroundColor:theme === 'light-mode' ? colors.lightGray2: colors.primaryWhite,
        marginVertical:constants.gap
    }
})

export default Separator;