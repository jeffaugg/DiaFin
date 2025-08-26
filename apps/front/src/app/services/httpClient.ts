import axios from 'axios';
import { localStorageKeys } from '../config/constants';

export const httpClient = axios.create({
    baseURL: import.meta.env.VITE_API_URL,
})

httpClient.interceptors.request.use(async (config) => {
    const acessToken = localStorage.getItem(localStorageKeys.ACCESSTOKEN);
    if(acessToken) {
        config.headers.Authorization = `Bearer ${acessToken}`;
    }
    return config;
})

httpClient.interceptors.response.use(async(data) => {
    if(data.status === 409 || data.status === 401) {
        localStorage.removeItem(localStorageKeys.ACCESSTOKEN);   
    }
    
    return data
});

