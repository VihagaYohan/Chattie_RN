import AsyncStorage from "@react-native-async-storage/async-storage";
import JwtDecode from 'jwt-decode';

// store data on async storage
const storeData = async(key,value)=>{
    try{    
      await AsyncStorage.setItem(key,value)
     
    }catch(e){
        console.log(e)
    }
}

// get data from async storage
const getData = async(key)=>{
    try{
        let result = await AsyncStorage.getItem(key)
        return result;
    }catch(e){
        console.log(e)
    }
}

// remove data from async storage
const removeData = async(key)=>{
    try{
        let result = await AsyncStorage.removeItem(key);
        return result;
    }catch(e){
        console.log(e)
    }
}

// decode jwt token
const decodeToken = async(token)=>{
    let result = JwtDecode(token);
    return result;
}

export default {
    storeData,
    getData,
    removeData,
    decodeToken
}