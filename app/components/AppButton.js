import React, { Component } from 'react'
import {StyleSheet,Text,TouchableOpacity} from 'react-native'
import {useSelector} from 'react-redux'

// utils
import {colors,appStyles,fonts,constants} from '../utils'

const AppButton = ({
    title,
    onPress,
    roundConners=false
})=>{
    const {theme} = useSelector(state => state.theme)
    const {mode} = theme

    return(
        <TouchableOpacity style={[styles(mode).container,{
            borderRadius:roundConners == true ? constants.gap*2:null
        }]} onPress={()=>onPress()}>
            <Text style={styles(mode).title}>{title}</Text>
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