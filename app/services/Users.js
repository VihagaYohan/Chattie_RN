import axiosClient from "./Api";
import Endpoints from "./Endpoints";

// get all users
export const getAllUsers = async(payload)=>{
    const result = await axiosClient.get(Endpoints.users);
    return result;
}