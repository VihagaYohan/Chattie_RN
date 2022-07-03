import React, { Component, useState } from 'react'
import { StyleSheet, View, Pressable, Image, Text } from 'react-native'
import moment from 'moment'

// hooks
import { useTheme } from '../hooks'

// components
import { CustomIcons, CustomText } from '.'

// utils
import { constants, colors, fonts, mode } from '../utils'

const { FontAwesomeIcon } = CustomIcons
const { RegularText } = CustomText

const ConversationBubble = ({ messageBody, isUser, time }) => {
    const [theme, setTheme] = useTheme('light-mode');

    return (
        <Pressable style={styles(theme, isUser).container}>
            <View
                style={styles(theme, isUser).messageBodyContainer(messageBody)}>

                <View style={{
                    width: '100%'
                }}>
                    <RegularText style={styles(theme, isUser).messageStyle}>{messageBody}</RegularText>
                    <RegularText style={styles(theme, isUser).timeStampStyle}>{moment(time, 'YYYYMMDD').fromNow()}</RegularText>
                </View>

            </View>
        </Pressable>
    )
}

const styles = (theme, isUser) => StyleSheet.create({
    container: {
        alignItems: isUser === true ? 'flex-end' : 'flex-start'
    },
    messageBodyContainer(messageBody) {
        return {
            width: messageBody.length <= 10 ? null : '50%',
            backgroundColor: colors.primaryPurple,
            flexWrap: 'wrap',
            paddingHorizontal: constants.innerGap / 2,
            marginBottom: constants.innerGap,
            borderRadius: constants.innerGap,
            borderTopLeftRadius: constants.innerGap,
            borderTopRightRadius: constants.innerGap,
            borderBottomLeftRadius: isUser == true ? constants.innerGap : 0,
            borderBottomRightRadius: isUser == true ? 0 : constants.innerGap,
        }

    },
    messageStyle: {
        fontSize: fonts.small-1,
        color: colors.primaryWhite
    },
    timeStampStyle: {
        textAlign: isUser == true ? 'right' : 'left',
        fontSize: fonts.extraSmall - 1,
        color: colors.primaryWhite 
    }
})

export default ConversationBubble;