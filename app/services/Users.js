import axiosClient from "./Api";
import Endpoints from "./Endpoints";

import {utils,constants} from '../utils'
const {getData} = utils

// get all users
export const getAllUsers = async(payload)=>{
    const result = await axiosClient.get(Endpoints.users);
    return result;
}

// get user info
export const getUserInfo = async(payload)=>{
 let result = await axiosClient.get(`${Endpoints.users}/${payload}`)
 return result;
}