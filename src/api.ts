import axios from 'axios';

const prod = 'https://cercas-cia-website-backend.vercel.app'

const api = axios.create({
    baseURL: prod, // Replace with your API base URL
    headers: {
        'Content-Type': 'application/json',
    },
});


export default api;