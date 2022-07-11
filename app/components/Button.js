import React, { Component } from 'react'
import {StyleSheet,Text,TouchableOpacity} from 'react-native'

// utils
import {colors,appStyles,fonts,constants} from '../utils'

const AppButton = ({
    title,
    onPress,
    roundConners=false
})=>{

    return(
        <TouchableOpacity onPress={()=>onPress()}>
            <Text>{title}</Text>
        </TouchableOpacity>
    )
}

const styles = theme => StyleSheet.create({
    container:{
        ...appStyles.flex_Row,
        justifyContent:'center',
        alignItems:'center',
        width:'100%',
        paddingVertical:constants.innerGap*2,
        backgroundColor:colors.primaryPurple
    },
    title:{
        fontFamily:fonts.regularFont,
        fontSize:fonts.medium,
        color:colors.primaryWhite
    }
})

export default AppButton;