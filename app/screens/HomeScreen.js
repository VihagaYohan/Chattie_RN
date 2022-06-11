import React, { Component, useState } from 'react'
import {
    StyleSheet, View, Text, Button, TouchableOpacity, Image,
    FlatList
} from 'react-native'
import { useDispatch, useSelector } from 'react-redux'
import { changeTheme } from '../store/Reducers/theme'
import Icon from 'react-native-vector-icons/FontAwesome5'
import { useTheme } from '@react-navigation/native'


// utility
import { utils, mode as themeMode, constants, appStyles, colors as appColors, fonts } from '../utils'

// components
import { AppWrapper, CustomText, AppHeader, CustomIcons } from '../components'

// assets
import { Person1,
Person2,
Person3,
Person4 } from '../../assets/images'

import Comment from '../../assets/images/Vector.svg'

const { EntypoIcon } = CustomIcons

const { getData, storeData } = utils
const { keys, screenWidth, screenHeight, innerGap, borderRadius } = constants
const { lightTheme, darkTheme } = themeMode
const { BoldText, RegularText } = CustomText
const DATA_PINNEDCHATS = [
    {
        id: "0",
        dataSet:
            [{
                id: "0",
                name: "Mike Wazowski1",
                lastMessage: "That's awesome...!",
                isReplied: true,
                image:Person1
            },
            {
                id: "1",
                name: "Darlene Steward",
                lastMessage: "Please take a look at the ...",
                isReplied: false,
                image:Person2
            },
            {
                id: "2",
                name: "Gegory Robertson",
                lastMessage: "Preparing for next vac...!",
                isReplied: false,
                image:Person3
            },
            {
                id: "3",
                name: "Dwlight Wilson",
                lastMessage: "I'd like to watch...!",
                isReplied: true,
                image:Person4
            }]
    },

    {
        id: "1",
        dataSet:
            [{
                id: "0",
                name: "Person 1",
                lastMessage: "That's awesome...!",
                isReplied: true,
                image:Person1,
            },
            {
                id: "1",
                name: "Person 1",
                lastMessage: "That's awesome...!",
                isReplied: true,
                image:Person2,
            },
            {
                id: "2",
                name: "Person 1",
                lastMessage: "That's awesome...!",
                isReplied: true,
                image:Person3,
            },
            {
                id: "3",
                name: "Person 1",
                lastMessage: "That's awesome...!",
                isReplied: true,
                image:Person4,
            }]
    },

]

const Screen = () => {
    const store = useSelector(state => state.theme);
    const { theme } = store

    // pinned chats container
    const PinnedChatsContainer = ({ contactName, image, lastMessage, isReplied }) => {
        let nameResult = contactName.split(' ');


        return (
            <TouchableOpacity style={styles(theme).pinnedChatItem}>

                <View style={styles(theme).pinnedChatSection}>
                    <View style={styles(theme).imageContainer}>
                        <Image style={styles(theme).chatImage}
                            source={image} />
                    </View>

                    <View>
                        <BoldText style={styles(theme).contactName}>{nameResult[0]}</BoldText>
                        {
                            nameResult.length > 1 && <BoldText
                                style={styles(theme).contactName}>{nameResult[1]}</BoldText>
                        }
                    </View>
                </View>

                <View style={styles(theme).pinnedMessageSection}>
                    <EntypoIcon name="reply"
                        color={appColors.primaryGray} />
                    <RegularText style={styles(theme).lastMessage}
                    numerOfLines={1}>{lastMessage}</RegularText>
                </View>
            </TouchableOpacity>
        )
    }

    return (
        <AppWrapper parentContainerStyle={styles(theme).parentContainer}>

            <AppHeader
                constainerStyle={styles(theme).headerCustomStyle}
                rightIcon={true}
                rightIconImage='https://randomuser.me/api/portraits/thumb/men/75.jpg' />

            {/* pinned chats container */}
            <FlatList
                data={DATA_PINNEDCHATS}
                pagingEnabled
                keyExtractor={({ id }) => id}
                horizontal
                showsHorizontalScrollIndicator={false}
                renderItem={({ item, index }) => {
                    return (
                        <View
                            style={styles(theme).pinnedChatItemContainer}>

                            <View style={{
                                flexDirection: 'row',
                                justifyContent: 'space-between'
                            }}>
                                <PinnedChatsContainer
                                    contactName={item.dataSet[0].name}
                                    isReplied={item.dataSet[0].isReplied}
                                    lastMessage={item.dataSet[0].lastMessage} 
                                    image={item.dataSet[0].image}/>
                                <PinnedChatsContainer
                                    contactName={item.dataSet[1].name}
                                    isReplied={item.dataSet[1].isReplied}
                                    lastMessage={item.dataSet[1].lastMessage}
                                    image={item.dataSet[1].image} />
                            </View>

                            <View style={{
                                flexDirection: 'row',
                                justifyContent: 'space-between'
                            }}>
                                <PinnedChatsContainer
                                    contactName={item.dataSet[2].name}
                                    isReplied={item.dataSet[2].isReplied}
                                    lastMessage={item.dataSet[2].lastMessage}
                                    image={item.dataSet[2].image} />
                                <PinnedChatsContainer
                                    contactName={item.dataSet[3].name}
                                    isReplied={item.dataSet[3].isReplied}
                                    lastMessage={item.dataSet[3].lastMessage}
                                    image={item.dataSet[3].image} />
                            </View>
                        </View>
                    )
                }} />


        </AppWrapper>
    )
}

const styles = (colors) => StyleSheet.create({
    parentContainer: {
        padding: constants.innerGap
    },
    headerCustomStyle: {
        justifyContent: 'space-between',
        alignItems: "center"
    },
    pinnedChatsContainer: {
        marginTop: constants.gap
    },
    pinnedChatsRow: {
        flexDirection: 'row',

    },
    pinnedChatItemContainer:{
         marginTop:constants.gap,
         paddingHorizontal:constants.innerGap,
         width:screenWidth -( constants.innerGap + 10)
    },
    pinnedChatItem: {
        backgroundColor:colors === 'light-mode' ? appColors.primaryWhite : appColors.primaryBlack,
        width: '48.5%',
        paddingHorizontal: innerGap,
        paddingVertical: innerGap * 1.2,
        borderRadius: 10,
        marginBottom: constants.gap / 2,
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.25,
        shadowRadius: 3.84,
        
        elevation: 5
    },
    pinnedChatSection: {
        flexDirection: 'row'
    },
    imageContainer: {
        width: constants.gap * 2.2,
        height: constants.gap * 2.2,
        borderRadius: (constants.gap * 2.2) / 2,
        overflow: 'hidden',
        justifyContent: 'center',
        alignItems: 'center',
        marginRight: constants.innerGap
    },
    contactName: {
        color: colors === 'light-mode' ? appColors.primaryBlack : appColors.primaryWhite,
        fontSize: fonts.regular
    },
    pinnedMessageSection: {
        flexDirection: 'row'
    },
    lastMessage: {
        color: appColors.primaryGray,
        fontSize: fonts.small
    }
})

export default Screen;