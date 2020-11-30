import axios from 'axios';

const setToken = () => {
    let token = localStorage.getItem('token')

    if(token){
       axios.defaults.headers.common["auth-token"] = token;
    }else{
       delete axios.defaults.headers.common["auth-token"];
    }
};
export default setToken;