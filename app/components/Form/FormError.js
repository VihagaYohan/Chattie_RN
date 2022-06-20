import React, { Component } from 'react'
import { StyleSheet, View, Text } from 'react-native'
import { useSelector } from 'react-redux'

// component
import { CustomText, CustomIcons } from '../'

// utils
import { constants, colors, fonts } from '../../utils'

const { RegularText } = CustomText
const { IoniconsIcon } = CustomIcons

const FormErrors = ({ children }) => {
    const { theme } = useSelector(state => state.theme);

    return (
        <View style={styles(theme).container}>
            <View style={styles(theme).iconContainer}>
                <IoniconsIcon
                    name="alert"
                    size={15}
                    color={theme == 'light-mode' ? colors.primaryWhite :
                        colors.primaryBlack} />
            </View>
            <RegularText style={styles(theme).errorText}>{children}</RegularText>
        </View>

    )
}

const styles = theme => StyleSheet.create({
    container: {
        flexDirection: 'row',
        alignItems: 'center',
        width: '100%',
        borderRadius: constants.buttonRadius * 5,
        paddingHorizontal: constants.gap,
        marginBottom: constants.gap,
        paddingVertical: constants.innerGap,
        backgroundColor: colors.lightRed
    },
    iconContainer: {
        width: constants.iconSize * 1.5,
        height: constants.iconSize * 1.5,
        borderRadius: 100,
        backgroundColor: colors.primaryRed,
        justifyContent: 'center',
        alignItems: 'center',
        marginRight: 5
    },
    errorText: {
        color: colors.primaryRed,
        fontSize: fonts.small
    }
})

export default FormErrors