import axios from 'axios';

const api = axios.create({
    baseUR:'https://randomuser.me/api'
});

export default api;