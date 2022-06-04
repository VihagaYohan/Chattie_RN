import React, { Component } from 'react'
import { StyleSheet, View, Text, Button } from 'react-native'
import { useDispatch, useSelector } from 'react-redux'
import { changeTheme } from '../store/Reducers/theme'
import Icon from 'react-native-vector-icons/FontAwesome5'
import { useTheme } from '@react-navigation/native'

// utility
import { utils, mode, constants } from '../utils'

// components
import { AppWrapper } from '../components'

const { getData, storeData } = utils
const { keys } = constants
const { lightTheme, darkTheme } = mode

const Screen = () => {
    const dispatch = useDispatch();
    const data = useSelector(state => state.theme)
    const theme = data.mode;
    const { colors } = useTheme();
    console.log('colors', colors)


    const handleTheme = async () => {



        let themeMode = theme.mode === 'dark-mode' ? 'light-mode' : 'dark-mode'
        console.log('mode', themeMode)


        let result = await storeData(keys.THEME, theme.mode === 'dark-mode' ? 'light-mode' : 'dark-mode');
        console.log('result', result);


        dispatch(changeTheme(themeMode === 'dark-mode' ? darkTheme : lightTheme))
    }

    const getTheme = async () => {
        let result = await getData('theme')
        console.log(result)
    }

    return (
        <AppWrapper>
            <Text style={styles(theme).text}>Home screen</Text>

            <Button title='Change theme' onPress={handleTheme} />

            <Button title="Get Theme" onPress={getTheme} />

            <Icon name="chevron-left"
                size={20}
                color="red" />


        </AppWrapper>
    )
}

const styles = colors => StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: colors.backgroundColor
    },
    text: {
        color: colors.primaryColor
    }
})

export default Screen;