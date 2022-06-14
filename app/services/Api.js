const axios = require('axios').default;
import {io} from 'socket.io-client'

/* const instance = axios.create({
    baseURL:'https://192.168.1.7:5000',
    timeout:2000,
    headers:{
        'content-type':"application/json"
    }
}) */

// socket config
export const socket = io(`https://192.168.1.7:5000`,{
    forceNew:true
})

socket.on('connection',()=>console.log('Connected'))

