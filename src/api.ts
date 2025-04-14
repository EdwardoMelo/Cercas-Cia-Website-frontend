import axios from 'axios';

const local = 'http://localhost:3000';
const prod = ''

const api = axios.create({
    baseURL: local, // Replace with your API base URL
    headers: {
        'Content-Type': 'application/json',
    },
});


export default api;