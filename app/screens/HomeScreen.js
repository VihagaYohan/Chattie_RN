import React, { Component } from 'react'
import { StyleSheet, View, Text, Button } from 'react-native'
import { useDispatch, useSelector } from 'react-redux'
import { changeTheme } from '../store/Reducers/theme'

import {utils,mode} from '../utils'

const {getData} = utils
const {lightTheme,darkTheme} = mode

const Screen = () => {
    const dispatch = useDispatch();
    const data = useSelector(state => state.theme)
    const theme = data.mode;


    const handleTheme = () => {
        let themeMode = theme.mode === 'dark-mode' ? 'dark-mode':'light-mode'
        console.log('mode',themeMode)

        

        dispatch(changeTheme(themeMode=== 'dark-mode' ? darkTheme : lightTheme))
    }

    const getTheme = async ()=>{
      let result = await getData('theme')
      console.log(result)
    }

    return (
        <View style={styles(theme).container}>
            <Text style={styles(theme).text}>Home screen</Text>

            <Button title='Change theme' onPress={handleTheme} />

            <Button title="Get Theme" onPress={getTheme}/>
        </View>
    )
}

const styles = colors => StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor:colors.backgroundColor
    },
    text:{
        color:colors.primaryColor
    }
})

export default Screen;