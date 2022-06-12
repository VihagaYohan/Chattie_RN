import React, { Component } from 'react'
import { StyleSheet, View, TouchableOpacity, Image } from 'react-native'
import { useSelector } from 'react-redux'
import moment from 'moment'

// utility
import { constants, colors as appColors, appStyles, fonts } from '../utils'

// components
import { CustomText } from './index'

const { RegularText, BoldText } = CustomText

const ConversationItem = ({ item }) => {
    const store = useSelector(state => state.theme);
    const { theme } = store

    console.log('item', item)

    return (
        <TouchableOpacity style={styles(theme).parentContainer}>
            <View style={styles(theme).imageContainer}>
                <Image source={{ uri: item.users[1].imageUri }}
                    style={styles(theme).image}
                />
            </View>

            <View style={styles(theme).messageDetailsContainer}>
                <RegularText style={styles(theme).contactNameStyles}>{item.users[1].name}</RegularText>
                <RegularText style={styles(theme).messageStyles}>{item.lastMessage.content}</RegularText>
            </View>

            <RegularText style={styles(theme).time}>{moment(`${item.lastMessage.createdAt}`, "YYYYMMDD").fromNow()}</RegularText>
        </TouchableOpacity>
    )
}

const styles = theme => StyleSheet.create({
    parentContainer: {
        ...appStyles.flex_Row,
        marginBottom: constants.gap
    },
    imageContainer: {
        width: constants.gap * 2.5,
        height: constants.gap * 2.5,
        borderRadius: (constants.gap * 2.5) / 2,
        marginRight: constants.gap,
        overflow: "hidden"
    },
    image: {
        width: '100%',
        height: '100%'
    },
    messageDetailsContainer: {
        flex: 1
    },
    contactNameStyles: {
        fontWeight: 'bold'
    },
    messageStyles: {
        color: theme == 'light-mode' ? appColors.primaryBlack : appColors.primaryWhite,
        fontSize: fonts.small
    },
    time: {
        fontSize: 12
    }
})

export default ConversationItem;