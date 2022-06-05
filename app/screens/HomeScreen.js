import React, { Component, useState } from 'react'
import { StyleSheet, View, Text, Button, TouchableOpacity } from 'react-native'
import { useDispatch, useSelector } from 'react-redux'
import { changeTheme } from '../store/Reducers/theme'
import Icon from 'react-native-vector-icons/FontAwesome5'
import { useTheme } from '@react-navigation/native'


// utility
import { utils, mode as themeMode, constants,appStyles } from '../utils'

// components
import { AppWrapper } from '../components'

import Comment from '../../assets/images/Vector.svg'

const { getData, storeData } = utils
const { keys, screenWidth, screenHeight } = constants
const { lightTheme, darkTheme } = themeMode

const Screen = () => {
    const { theme } = useSelector(state => state.theme)
    const dispatch = useDispatch();

    const [currentTheme, setCurrentTheme] = useState(theme)




    // handle theme
    const handleTheme = async () => {
        dispatch(changeTheme(
            theme.mode == 'light-mode' ? darkTheme : lightTheme
        ))

        let result = await storeData(keys.THEME,
            theme.mode == 'light-mode' ? 'dark-mode' : 'light-mode')
    }

    const getTheme = async () => {
        let result = await getData(keys.THEME)
        setCurrentTheme(result)
        console.log(currentTheme)
    }

    const setTile = () => {
        return;
    }

    return (
        <AppWrapper>
            <TouchableOpacity style={styles(theme, currentTheme).button}
                onPress={() => handleTheme()}>
                <Text style={styles(theme, currentTheme).text}>change theme</Text>
            </TouchableOpacity>

            <TouchableOpacity style={styles(theme, currentTheme).button}
                onPress={() => getTheme()}>
                <Text style={styles(theme, currentTheme).text}>get theme</Text>
            </TouchableOpacity>

            <Text>{theme.mode}</Text>


        </AppWrapper>
    )
}

const styles = (colors, mode) => StyleSheet.create({
    container: {
    
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: colors.backgroundColor
        
    },
    button: {
        borderWidth: 1,
        paddingVertical: 10,
        marginVertical: 10,
        backgroundColor: colors.mode == 'light-mode' ? 'white' : 'black'
    },
    text: {
        color: colors.mode === 'light-mode' ? 'black' : 'white',// colors.primaryColor
    }
})

export default Screen;