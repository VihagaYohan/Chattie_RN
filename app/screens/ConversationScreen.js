import React, { Component, useState, useRef, useEffect } from 'react'
import {
    StyleSheet, View, TouchableOpacity, FlatList,
    TextInput, Text,
    ActivityIndicator,
    Dimensions,
    ScrollView,
    SafeAreaView
} from 'react-native'
import io from 'socket.io-client';

// hooks
import { useTheme } from '../hooks'

// components
import { AppWrapper, AppHeader, CustomIcons, ConversationBubble } from '../components'

// utils
import { utils, constants, colors, mode, appStyles } from '../utils'

// api services
import { getUserInfo } from '../services/Users'
import { getMessages } from '../services/Messages'

const { decodeToken, getData } = utils
const { FontAwesomeIcon } = CustomIcons

const ConversationScreen = ({ navigation }) => {
    const [theme, setTheme] = useTheme('light-mode');
    const [loading, setLoading] = useState(true);
    const [user, setUser] = useState();
    const [messages, setMessages] = useState([]); // all messages in conversation
    const [message, setMessage] = useState(); // new message 

    const socketRef = useRef(); // socket ref

    useEffect(() => {
        getCurrentUser();
        socketRef.current = io('http://192.168.1.8:5000');

        socketRef.current.on('message', message => {
            setMessages(message)
        })
    }, [])

    // get messages for current conversation
    const fetchAllMessages = async (payload) => {
        try {
            let { data } = await getMessages(payload);
            let result = data;
            setMessages(result.data)
        } catch (e) {
            console.log(e)
        }
    }

    useEffect(() => {
    }, [messages])

    // get current user
    const getCurrentUser = async () => {
        try {
            let token = await getData(constants.keys.ACCESS_TOKEN);
            let user = await decodeToken(token)
            setUser(user)
            let payload = {
                token: token,
                id: "62a805c2947a4ec1649bb670"
            }

            fetchAllMessages(payload);
        } catch (e) {
            console.log(e)
        }
    }

    const handleSendMessage = async () => {
        let messageObj = {
            conversationId: "62a805c2947a4ec1649bb670",
            message: message,
            senderId: user.id
        }
        socketRef.current.emit('message', messageObj)
    }

    return (
        <SafeAreaView
            style={styles(theme).parentContainer}>

            <AppHeader
                isLeftIcon={true}
                leftIconName="chevron-left"
                title="Conversation"
                rightIcon={true}
            />

            <View style={styles(theme).messageListContainer}>
                {
                    messages.length > 1 &&
                    (
                        <FlatList
                            contentContainerStyle={{
                                flex: 1,
                            }}
                            data={messages}
                            keyExtractor={item => JSON.stringify(item)}
                            renderItem={({ item, index }) => {
                                return (
                                    <ConversationBubble
                                        key={index}
                                        messageBody={item.message}
                                        isUser={user.id == item.senderId ? true : false}
                                        time={item.createdOn} />
                                )
                            }} />
                    )
                }
            </View>

            <View style={styles(theme).messageInputFieldContainer}>
                <TextInput
                    style={styles(theme).messageFieldStyle}
                    placeholder='Type your message here'
                    placeholderTextColor={theme == 'light-mode' ? colors.lightGra3 : colors.primaryWhite}
                    value={message}
                    onChangeText={text => setMessage(text)} />

                <FontAwesomeIcon
                    name="send"
                    color={colors.primaryPurple}
                    onPress={handleSendMessage}
                />
            </View>

        </SafeAreaView>
    )
}

const styles = theme => StyleSheet.create({
    parentContainer:{
        flex: 1,
        justifyContent: 'space-between',
        paddingHorizontal: constants.innerGap,
        backgroundColor:theme === 'light-mode' ? mode.lightTheme.backgroundColor : mode.darkTheme.backgroundColor
    },
    messageListContainer:{
        flex: 1,
        backgroundColor:theme === 'light-mode' ? mode.lightTheme.backgroundColor : mode.darkTheme.backgroundColor
    },
    messageInputFieldContainer:{
        flexDirection: 'row',
        alignItems: 'center',
        marginVertical:5,
        borderRadius:constants.gap*2,
        paddingHorizontal:constants.innerGap,
        backgroundColor:theme === 'light-mode'? mode.lightTheme.backgroundColor : mode.darkTheme.backgroundColor,
        ...appStyles.shadow
    },
    messageFieldStyle:{
        flex:1,
        color:theme === 'light-mode' ? colors.primaryGray: colors.primaryWhite
    }
})


export default ConversationScreen;