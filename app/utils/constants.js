import {Dimensions} from 'react-native'

const {width,height} = Dimensions.get('screen')

const http = {
    POST:'POST',
    GET:'GET',
    PUT:'PUT',
    DELETE:'DELETE',
    MULTIPART:'MULTIPART'
}

export default {
    screenWidth:width,
    screenHeight:height,
    http
}