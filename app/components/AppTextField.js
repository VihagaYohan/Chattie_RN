import React, { Component } from 'react'
import { StyleSheet, View, Text, TextInput } from 'react-native'
import { useSelector } from 'react-redux'

// components
import { CustomIcons } from '../components'

// utils
import { constants, colors, fonts, appStyles } from '../utils'

const { FontAwesomeIcon } = CustomIcons

const AppTextField = ({
    roundConners = false,
    onChangeText,
    rightIcon = false,
    leftIcon = false,
    rightIconName = "",
    leftIconName = "",
    ...otherProps
}) => {
    const { theme } = useSelector(state => state.theme)


    return (
        <View style={[styles(theme).container,
        {
            borderRadius: roundConners === true ? constants.gap * 2 : null
        }]}>
            {leftIcon && (
                <FontAwesomeIcon
                    name={leftIconName}
                    color={theme == 'light-mode' ? colors.lightGray2 : colors.primaryPurple}
                    />
            )}
            <TextInput
                style={styles(theme).textField}
                onChangeText={e => onChangeText(e)} {...otherProps} />

            {rightIcon && (
                <FontAwesomeIcon
                name={rightIconName}
                color={theme == 'light-mode' ? colors.lightGray2 : colors.primaryPurple}
                />
            )}    
        </View>

    )
}

const styles = theme => StyleSheet.create({
    container: {
        ...appStyles.flex_Row,
        alignItems:'center',
        paddingHorizontal:constants.innerGap*2,
        borderWidth: 1,
        borderColor: theme === 'light-mode' ? colors.lightGray2 : colors.primaryPurple,
        backgroundColor:theme === 'light-mode' ? colors.primaryWhite: colors.primaryBlack,
    },
    textField: {
        flex:1,
        color:theme === 'light-mode'?colors.primaryBlack: colors.primaryWhite,
        marginLeft:10,
        fontSize:fonts.regular
    }
})

export default AppTextField;