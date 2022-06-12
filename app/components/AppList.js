import React, { Component } from 'react'
import {StyleSheet,View,FlatList} from 'react-native'
import {useSelector} from 'react-redux'

// utility
import {constants,colors as appColors,} from '../utils'

// components
import {ConversationItem} from './index'

const AppList = ({dataSource,containerStyle ,...otherProps})=>{
    const store = useSelector(state => state.theme);
    const { theme } = store

   console.log('props', otherProps)

    return(
        <FlatList
        contentContainerStyle={containerStyle}
        data={dataSource}
        {...otherProps}
        keyExtractor={({item,index}) => index}
        renderItem={({item,index}) => <ConversationItem item={item}/>}/>
    )
}

const styles = theme => StyleSheet.create({

})

export default AppList;