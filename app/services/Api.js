import axios from 'axios'

import { BASE_URL } from './Environment'

const instance = axios.create({
    baseURL: BASE_URL.development,
    timeout: 2000,
    headers: {
        'content-type': "application/json"
    }
})

export default instance;