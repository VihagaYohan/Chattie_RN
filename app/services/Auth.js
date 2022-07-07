import axiosClient from "./Api";
import Endpoints from './Endpoints'
import {utils,constants} from '../utils'

const {removeData} = utils
const {keys} = constants

export const userLogin = async(payload)=>{
    const result = await axiosClient.post(Endpoints.login,payload)
    return result;
}

export const userRegister = async(payload)=>{
    const result = await axiosClient.post(Endpoints.register)
    return result;
}

export const userLogout = async(payload)=>{
    const result = await removeData(keys.ACCESS_TOKEN)
    return result;
}