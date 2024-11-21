import axios from 'axios'

const api = axios.create({
    baseURL: '' //LocalHost do back
})

export default api