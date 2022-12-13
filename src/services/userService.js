import axios from "../axios"
const handlerLoginApi = (email, password) => {
    return axios.post('/api/login', { email, password });
}

export { handlerLoginApi }