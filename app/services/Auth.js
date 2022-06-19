import axiosClient from "./Api";
import Endpoints from './Endpoints'

export const userLogin = async(payload)=>{
    const result = await axiosClient.post(Endpoints.login,payload)
    return result;
}