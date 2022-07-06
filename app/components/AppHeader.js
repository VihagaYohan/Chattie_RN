import React, { Component,useState } from 'react'
import {StyleSheet,View,TouchableOpacity,Image} from 'react-native'
import {useNavigation} from '@react-navigation/native'

// hooks
import {useTheme} from '../hooks/'

// utils
import {colors, constants,mode} from '../utils'

// components
import {CustomText,CustomIcons} from '../components/'

const {BoldText} = CustomText
const {FontAwesomeIcon} = CustomIcons

const AppHeader = ({isLeftIcon, leftIconName, 
title,
isRightIcon,
rightIconName})=>{
    const [theme, setTheme] = useState('light-mode');
    const navigation = useNavigation();

    return(
        <View
        style={[styles(theme).container]}>
            {
                isLeftIcon && (
                    <FontAwesomeIcon
                    name={leftIconName}
                    color={colors.primaryWhite}
                    onPress={()=>navigation.navigate('Home')}/>
                )
            }
            <BoldText style={styles(theme).titleStyle}>{title}</BoldText>

            {
                isRightIcon == true ? (
                    <FontAwesomeIcon
                    name={leftIconName}
                    color={colors.primaryWhite}
                    onPress={()=>navigation.navigate('Home')}/>
                ):(
                    <View
                    style={styles(theme).emptyIconContainer}></View>
                )
            }
        </View>
    )
}

const styles = theme => StyleSheet.create({
    container:{
        flexDirection:'row',
        paddingVertical:constants.innerGap,
        alignItems:'center'
    },
    titleStyle:{
        flex:1,
        textAlign:'center'
    },
    emptyIconContainer:{
        width:constants.iconSize,
        height:constants.iconSize
    }
})

export default AppHeader;