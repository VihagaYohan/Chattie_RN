import {StyleSheet} from 'react-native'

import {utils} from '../../utils'

const {getData} = utils

let theme  = 'light-mode';

/* const getTheme = async()=>{
    theme = await getData("THEME");

}

getTheme(); */

export const styles =  StyleSheet.create({
    parentContainer:{
        width:'100%'
    },
    background:{
        backgroundColor:theme == 'light-mode' ? 'white':'black'
    }
})

export default {styles};