import React, { Component,useState,useRef,useEffect } from 'react'
import {StyleSheet,View,TouchableOpacity,FlatList,
TextInput,Text,
ActivityIndicator,
Dimensions} from 'react-native'
import io from 'socket.io-client';

// hooks
import {useTheme} from '../hooks'

// components
import {AppWrapper,CustomIcons} from '../components'

// utils
import {utils,constants,colors} from '../utils'

// api services
import {getUserInfo} from '../services/Users'
import {getMessages} from '../services/Messages'

const {decodeToken,getData} = utils
const {FontAwesomeIcon} = CustomIcons

const ConversationScreen = ({navigation})=>{
    const [theme, setTheme] = useTheme('light-mode');
    const [loading, setLoading] = useState(true);
    const [user, setUser] = useState(user);
    const [messages,setMessages] = useState([]); // all messages in conversation
    const [message, setMessage] = useState(); // new message 

    const socketRef = useRef(); // socket ref

     useEffect(()=>{
        getCurrentUser();
        socketRef.current = io('http://192.168.1.7:5000');

        socketRef.current.on('message',message => {
            console.log(message);
            setMessages(message)
        })
     },[])

     // get messages for current conversation
     const fetchAllMessages = async(payload)=>{
        try{
            let {data} = await getMessages(payload);
            console.log('messages list');
            let result = data;
            setMessages(result.data)
        }catch(e){
            console.log(e)
        }
     }

     useEffect(()=>{
        console.log('new message')
     },[messages])

    // get current user
    const getCurrentUser = async()=>{
        try{
            let token = await getData(constants.keys.ACCESS_TOKEN);
            let user = await decodeToken(token)
            console.log(user)
            setUser(user)

            let payload = {
                token:token,
                id:"62a805c2947a4ec1649bb670"
            }

            fetchAllMessages(payload);
        }catch(e){
            console.log(e)
        }
    }

    const handleSendMessage = async()=>{
        let messageObj = {
            conversationId:"62a805c2947a4ec1649bb670",
            message:message,
            senderId:user.id
        }
        socketRef.current.emit('message',messageObj) 
    }

    return(
        <AppWrapper style={{position:'relative'}}>
           <View style={{
            width:"100%",
            height:(constants.screenHeight - 50)*1,

            borderWidth:1,
            backgroundColor:'red'
           }}></View>

<View style={{
            width:"100%",
            height:40,
            //height:(constants.screenHeight - 50)*0.2,
            borderWidth:1,
            backgroundColor:'green',
            position:"absolute",
            left:0,
            bottom:50
           }}></View>
        </AppWrapper>
    )

    /* return(
        <AppWrapper innerContainerStyle={{
            height:constants.screenHeight,
            width:constants.screenWidth,
            borderWidth:1,
            height:"90%"
            
        }}>
            <View style={{height:'100%',width:'100%'}}>
            {
                messages.length > 1 && 
                (
                    <FlatList
                    contentContainerStyle={{
                        flex:1,
                        backgroundColor:'red'
                    }}
                    data={messages}
                    keyExtractor={item=> JSON.stringify(item)}
                    renderItem={({item,index}) =>{
                        return(
                            <Text key={index}>{item.message}</Text>
                        )
                    }}/>
                )
            }
            </View>

            <View style={{
                flexDirection:'row',
                alignItems:'center',
                marginHorizontal:10,
                borderWidth:1,
            }}>
                <TextInput
                style={{
                    flex:1
                }}
                placeholder='Type your message here'
                value={message}
                onChangeText={text => setMessage(text)}/>

                <FontAwesomeIcon
                name="send"
                color={colors.primaryPurple}
                onPress={handleSendMessage}
                />
            </View>
        </AppWrapper>
    ) */
}

const styles = theme => StyleSheet.create({

})


export default ConversationScreen;