import React, { Component, useState, useRef, useEffect } from 'react'
import { StyleSheet, View, TouchableOpacity, FlatList, TextInput, Text } from 'react-native'
import { useSelector } from 'react-redux'
import io from 'socket.io-client'

// components
import { AppWrapper } from '../components'

const ConversationScreen = ({ route }) => {
    const { theme } = useSelector(state => state.theme)
    const { name } = route.params

    const [messages, setMessages] = useState([]);
    const [message, setMessage] = useState();

    const socketRef = useRef();

    // message from server


    useEffect(() => {
        socketRef.current = io('http://192.168.1.7:5000')

        socketRef.current.on('message', message => {
            console.log(message)
            setMessages(message)
        })
    }, [])

    const handleSend = () => {
        socketRef.current.emit('message', message)
    }

    return (
        <AppWrapper>

            <TextInput
                style={styles(theme).field}
                placeholder='Enter message'
                value={message}
                onChangeText={text => setMessage(text)} />

            <TouchableOpacity style={styles(theme).button}
                onPress={() => handleSend()}>
                <Text>Send Message</Text>
            </TouchableOpacity>

            {
                messages.length > 1 &&
                messages.map(item => {
                    return (
                        <Text>{item}</Text>
                    )
                })
            }

        </AppWrapper>
    )
}

const styles = theme => StyleSheet.create({
    field: {
        width: '100%',
        borderWidth: 1,
    },
    button: {
        borderWidth: 1,
        marginVertical: 10,
        paddingVertical: 10,
        justifyContent: 'center',
        alignItems: 'center'
    }
})

export default ConversationScreen;