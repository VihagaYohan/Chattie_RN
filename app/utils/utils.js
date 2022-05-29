import AsyncStorage from "@react-native-async-storage/async-storage";

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

export default {
    storeData,
    getData
}