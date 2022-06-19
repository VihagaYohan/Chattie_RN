import axios from 'axios';
import {BASE_URL} from './Environment'

const axiosClient = axios.create();

axiosClient.defaults.baseURL = BASE_URL.development;

axiosClient.defaults.headers = {
    'Content-Type':'application/json',
    Accept:"application/json"
};

axiosClient.defaults.timeout = 2000;

//axiosClient.defaults.withCredentials = true;

export default axiosClient;