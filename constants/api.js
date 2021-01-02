import axios from 'axios'

const api = axios.create({
    baseURL: `http://localhost:8001`
})
export const API_BASE_URL = api
