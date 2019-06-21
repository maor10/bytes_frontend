import axios from 'axios';


const route = "http://192.168.43.186:5555";

export const post = (endpoint, data) => {
    return axios.post(route + endpoint, data);
};


export const get = (endpoint, data) => {
    return axios.get(route + endpoint, data);
};