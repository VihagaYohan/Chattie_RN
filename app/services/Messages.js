import axiosClient from "./Api";
import Endpoints from "./Endpoints";
import {utils,constants} from '../utils'

export const getMessages = async(payload)=>{
    const result = await axiosClient.get(`${Endpoints.messages}/${payload.id}`,{
        headers:{
            'Content-Type':'application/json',
            'x-auth-token':payload.token
        }
    });
    return result;
}