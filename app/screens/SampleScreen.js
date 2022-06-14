import React, { Component,useState,useRef,useEffect } from 'react'
import {StyleSheet,View,TouchableOpacity,Text,
TextInput} from 'react-native'
import {useSelector} from 'react-redux'


// components
import {AppWrapper} from '../components'

// services
import {socket} from '../services/Api'

const SampleScreen = ({navigation})=>{
    const {theme} = useSelector(state => state.theme)
    const [name, setName] = useState()

    const handleLogin =()=>{
        navigation.navigate('Conversation',{
            name:name
        })
    }
    
    return(
        <AppWrapper>
                <TextInput
                style={styles(theme).field}
                placeholder='Enter name'
                value={name}
                onChangeText={text => setName(text)}/>

                <TouchableOpacity style={styles(theme).button}
                onPress={()=>handleLogin()}>
                    <Text>Login</Text>
                </TouchableOpacity>
        </AppWrapper>
    )
}

const styles = theme => StyleSheet.create({
    field:{
        width:'100%',
        borderWidth:1,
    },
    button:{
        borderWidth:1,
        marginVertical:10,
        paddingVertical:10,
        justifyContent:'center',
        alignItems:'center'
    }
})

export default SampleScreen;