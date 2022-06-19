import {BASE_URL} from './Environment'

const baseURL = BASE_URL.development

class Endpoints {
    static login =  baseURL + '/api/auth/login'
}

export default Endpoints;