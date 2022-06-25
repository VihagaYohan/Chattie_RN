import React, { Component, useState } from 'react'
import {
    StyleSheet, View, Text, Button, TouchableOpacity, Image,
    FlatList
} from 'react-native'
import { useSelector } from 'react-redux'
import { responsiveScreenHeight, responsiveScreenWidth } from 'react-native-responsive-dimensions'


// utility
import { utils, mode as themeMode, constants, appStyles, colors as appColors, fonts } from '../utils'

// components
import { AppWrapper, CustomText, AppHeader, CustomIcons, AppList } from '../components'

// assets
import {
    Person1,
    Person2,
    Person3,
    Person4
} from '../../assets/images'

// local data
import Conversations from '../data/ChatRooms'

// routes
import routes from '../navigators/routes'

const { EntypoIcon, FontAwesomeIcon } = CustomIcons

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
                image: Person1
            },
            {
                id: "1",
                name: "Darlene Steward",
                lastMessage: "Please take a look at the ...",
                isReplied: false,
                image: Person2
            },
            {
                id: "2",
                name: "Gegory Robertson",
                lastMessage: "Preparing for next vac...!",
                isReplied: false,
                image: Person3
            },
            {
                id: "3",
                name: "Dwlight Wilson",
                lastMessage: "I'd like to watch...!",
                isReplied: true,
                image: Person4
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
                image: Person1,
            },
            {
                id: "1",
                name: "Person 1",
                lastMessage: "That's awesome...!",
                isReplied: true,
                image: Person2,
            },
            {
                id: "2",
                name: "Person 1",
                lastMessage: "That's awesome...!",
                isReplied: true,
                image: Person3,
            },
            {
                id: "3",
                name: "Person 1",
                lastMessage: "That's awesome...!",
                isReplied: true,
                image: Person4,
            }]
    },

]

const Screen = ({ navigation }) => {
    const store = useSelector(state => state.theme);
    const { theme } = store

    console.log('theme here', theme)

    console.log('conversations', Conversations)
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
                    {
                        isReplied && (
                            <EntypoIcon name="reply"
                                color={theme == 'light-mode' ? appColors.primaryGray : appColors.primaryWhite} />
                        )
                    }
                    <RegularText style={styles(theme).lastMessage}
                        numerOfLines={1}>{lastMessage}</RegularText>
                </View>
            </TouchableOpacity>
        )
    }

    return (
        <React.Fragment>


            <AppWrapper parentContainerStyle={styles(theme).parentContainer}>

                <AppHeader
                    title="Pinned Chats"
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

                                <View style={styles(theme).pinnedChatsRow}>
                                    <PinnedChatsContainer
                                        contactName={item.dataSet[0].name}
                                        isReplied={item.dataSet[0].isReplied}
                                        lastMessage={item.dataSet[0].lastMessage}
                                        image={item.dataSet[0].image} />
                                    <PinnedChatsContainer
                                        contactName={item.dataSet[1].name}
                                        isReplied={item.dataSet[1].isReplied}
                                        lastMessage={item.dataSet[1].lastMessage}
                                        image={item.dataSet[1].image} />
                                </View>

                                <View style={styles(theme).pinnedChatsRow}>
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

                {/* recent chats title and search */}
                <View style={styles(theme).recentChatTitleContainer}>
                    <BoldText>Recent Chats</BoldText>
                    <FontAwesomeIcon
                        name="search"
                        color={appColors.primaryGray}
                        size={responsiveScreenWidth(6)}
                        onPress={()=>{
                            navigation.navigate(routes.SearchUser)
                        }} />
                </View>

                {/* recent chats list */}
                <AppList
                    containerStyle={styles(theme).appListContainerStyle}
                    dataSource={Conversations}
                />




            </AppWrapper>

            {/* floating action button */}
            <TouchableOpacity
                style={styles(theme).floatingButtonContainer}
                onPress={() => navigation.navigate(routes.Conversation, {
                    name: "John"
                })}>
                <FontAwesomeIcon
                    name="comment"
                    size={constants.iconSize}
                    color={theme === 'light-mode' ? appColors.primaryWhite : appColors.primaryBlack} />
            </TouchableOpacity>
        </React.Fragment>
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

    /* pinned chat section styles */
    pinnedChatsContainer: {
        marginTop: constants.gap
    },
    pinnedChatsRow: {
        flexDirection: 'row',
        justifyContent: 'space-between'
    },
    pinnedChatItemContainer: {
        marginTop: constants.gap,
        paddingHorizontal: constants.innerGap,
        width: screenWidth - (constants.innerGap + 10)
    },
    pinnedChatItem: {
        backgroundColor: colors === 'light-mode' ? appColors.primaryWhite : appColors.primaryBlack,
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
        borderWidth: 1,
        borderColor: colors === 'light-mode' ? appColors.primaryWhite : appColors.primaryWhite,

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
        fontSize: fonts.regular,
    },
    pinnedMessageSection: {
        flexDirection: 'row'
    },
    lastMessage: {
        color: colors == 'light-mode' ? appColors.primaryGray : appColors.primaryWhite,
        fontSize: fonts.small,
        marginLeft: 10
    },

    // recent chat title and search
    recentChatTitleContainer: {
        ...appStyles.flex_Row,
        justifyContent: 'space-between',
        alignItems: 'center',
        marginTop: constants.gap
    },

    // conversation list 
    appListContainerStyle: {
        marginTop: constants.gap
    },

    // floating action button
    floatingButtonContainer: {
        position: 'absolute',
        bottom: 50,
        right: 10,
        width: 50,
        height: 50,
        borderRadius: 25,
        backgroundColor: appColors.primaryPurple,
        justifyContent: 'center',
        alignItems: 'center'
    }
})

export default Screen;