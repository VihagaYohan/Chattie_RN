import axios from 'axios';
import {BASE_URL} from './Environment'

// utils
import {utils, constants} from '../utils'

const {getData} = utils

// check if user already logged in
const checkUserLogin = async()=>{
    let result = await getData(constants.keys.ACCESS_TOKEN);
    return result;
}

var token = checkUserLogin();

const axiosClient = axios.create();

axiosClient.defaults.baseURL = BASE_URL.development;

axiosClient.defaults.headers = {
    'Content-Type':'application/json',
    Accept:"application/json",
    'x-auth-token':token === undefined || null ? token:""
};

console.log('token',token)

axiosClient.defaults.timeout = 2000;

//axiosClient.defaults.withCredentials = true;

export default axiosClient;