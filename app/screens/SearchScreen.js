import React, { Component,useState,useEffect } from 'react'
import {StyleSheet,View,Text} from 'react-native'

// hooks
import {useTheme} from '../hooks'

// components
import {AppWrapper,CustomText,CustomIcons,
AppTextField} from '../components'

// utils
import {constants,colors} from '../utils'

// services
import {getAllUsers} from '../services/Users'

const SearchScreen = ()=> {
    const [theme, setTheme] = useTheme();
    const [searchText, setSearchText] = useState();

    useEffect(()=>{
        feedAllUsers();
    },[])

    // get all users
    const feedAllUsers = async()=>{
        try{
            let result = await getAllUsers();
            console.log(result)
        }catch(e){
            console.log(e)
        }
    }

    // handle search text
    const handleSearchText = async (e)=>{
        setSearchText(e);
    }

    return(
        <AppWrapper parentContainerStyle={styles(theme).parentContainerStyle}>
            <AppTextField
            onChangeText={e => handleSearchText(e)}
            placeholder="Search user here"
            rightIcon={true}
            rightIconName="search"/>

            <Text>{searchText}</Text>
        </AppWrapper>
    )
}

const styles = theme => StyleSheet.create({
    parentContainerStyle:{
        padding:constants.innerGap
    }
})

export default SearchScreen;