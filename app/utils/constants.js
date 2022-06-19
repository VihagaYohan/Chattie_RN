import {Dimensions} from 'react-native'
import {responsiveScreenHeight,responsiveScreenWidth} from 'react-native-responsive-dimensions'

const {width,height} = Dimensions.get('screen')

const http = {
    POST:'POST',
    GET:'GET',
    PUT:'PUT',
    DELETE:'DELETE',
    MULTIPART:'MULTIPART'
}

// keys
const keys = {
    THEME:'THEME',
    ACCESS_TOKEN:'ACCESS_TOKEN'
}

const gap = responsiveScreenWidth(5)
const innerGap = responsiveScreenWidth(2)
const buttonBorderWidth = responsiveScreenWidth(0.2)
const buttonRadius = responsiveScreenWidth(2)
const buttonHeight = responsiveScreenHeight(6)
const smallButtonHeight = responsiveScreenHeight(4.5)
const buttonShadow = {width:responsiveScreenWidth(1), height:responsiveScreenHeight(1)}
const buttonShadowOpacity = 0.08
const iconSize = responsiveScreenWidth(5)


export default {
    screenWidth:width,
    screenHeight:height,
    http,
    keys,
    gap,
    innerGap,
    buttonBorderWidth,
    buttonRadius,
    buttonHeight,
    smallButtonHeight,
    buttonShadow,
    buttonShadowOpacity,
    iconSize
}