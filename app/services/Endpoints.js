import {BASE_URL} from './Environment'

const baseURL = BASE_URL.development

class Endpoints {
    static login =  baseURL + '/api/auth/login'
    static register = baseURL + '/api/auth/register'
    static users = baseURL + '/api/users'
    static messages = baseURL + '/api/messages'
}

export default Endpoints;