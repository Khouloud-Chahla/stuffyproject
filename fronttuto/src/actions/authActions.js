import {
    REGISTER_SUCCESS,
    REGISTER_FAIL,
    LOGIN_SUCCESS,
    LOGIN_FAIL,
    LOAD_USER_SUCCESS,
    LOAD_USER_FAIL,
    COLIS_SUCCESS,
    COLIS_FAIL,
    LOAD_COLIS_SUCCESS,
    LOAD_COLIS_FAIL,
    LOGOUT,
    LOAD_ALL_SUCCESS,
    LOAD_ALL_FAIL,
    LOAD_RECEIVED_SUCCESS,
    LOAD_RECEIVED_FAIL,
    SEARCH_SUCCESS,
    SEARCH_FAIL,
    ADMIN_SUCCESS,
    ADMIN_FAIL,
    MEMBERS_LOAD_SUCCESS,
    MEMBERS_LOAD_FAIL,
} from "./types";
import axios from 'axios';
import setToken from '../setToken';


// je vais creer mes fonctions, parametere howa state
export const registerUser = (info) => (dispatch) => {
    axios.post('/register', info)
    .then(res => dispatch({
        type: REGISTER_SUCCESS,
        payload: res.data,
    }))
    .catch(err => dispatch({
        type: REGISTER_FAIL,
        payload: err.response.data.msg,
    })
    );
};
 
export const loadUser = () => dispatch => {
    setToken()
    axios.get('/login')
    .then(res => dispatch({
        type: LOAD_USER_SUCCESS,
        payload: res.data,
    }))
    .catch(err => dispatch({
        type: LOAD_USER_FAIL,
        payload: err.response.data.msg,
    })
    );
};

export const loginUser = (info) => (dispatch) => {
     axios.post("/login", info)
     .then(res => dispatch({
         type: LOGIN_SUCCESS,
         payload: res.data,
     }))
     .catch(err => dispatch({
         type: LOGIN_FAIL,
         payload:err.response.data.msg,
     })
     );
};

export const logoutUser = () => dispatch => {
    dispatch({
        type: LOGOUT,
    });
};

export const sendParsel = (info) => dispatch => {
    setToken()
    axios.post("/sender", info)
    .then(res => dispatch({
        type: COLIS_SUCCESS,
        payload: res.data,
    }))
    .catch(err => dispatch({
        type: COLIS_FAIL,
        payload: err.response.data.msg,
    })
    );
};

export const showParcel = () => dispatch => {
    setToken()
    axios.get('/sender')
    .then(res => dispatch({
        type: LOAD_ALL_SUCCESS,
        payload: res.data,
    }))
    .catch((err) => dispatch({
        type: LOAD_ALL_FAIL,
        payload: err.response.data.msg,
    })
    );
};

export const receivedParcel = () => dispatch => {
    setToken()
    axios.get('/receiver')
    .then(res => dispatch({
        type: LOAD_RECEIVED_SUCCESS,
        payload: res.data,
    }))
    .catch((err) => dispatch({
        type: LOAD_RECEIVED_FAIL,
        payload: err.response.data.msg,
    }))
}

export const searchMembers = () => dispatch => {
    setToken()
    axios.get('/login/add')
    .then(res => dispatch({
        type: SEARCH_SUCCESS,
        payload: res.data,
    }))
    .catch((err) => dispatch({
        type: SEARCH_FAIL,
        payload: err.response.data.msg,
    }));
};

export const adminLoad = () => dispatch => {
    axios.get('/admin')
    .then(res => dispatch({
        type: ADMIN_SUCCESS,
        payload: res.data,
    }))
    .catch(err => dispatch({
        type: ADMIN_FAIL,
        payload: err.response.data.msg,
    }));
};
 export const membersLoad = () => dispatch => {
     axios.get('/admin/members')
     .then(res => dispatch({
         type: MEMBERS_LOAD_SUCCESS,
         payload: res.data,
     }))
     .catch(err => dispatch({
         type: MEMBERS_LOAD_FAIL,
         payload: err.response.data.msg,
     }))
 }


