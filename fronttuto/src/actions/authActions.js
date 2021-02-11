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
    VERIFY_SUCCESS,
    VERIFY_FAIL,
    EDIT_SUCCESS,
    EDIT_FAIL,
    SEND_EMAIL_SUCCESS,
    SEND_EMAIL_FAIL,
    SEND_PWD_SUCCESS,
    SEND_PWD_FAIL,
    COND_SUCCESS,
    COND_FAIL,
    PWD_CHANGE_SUCCESS,
    PWD_CHANGE_FAIL,
    SEND_CODE_SUCCESS,
    SEND_CODE_FAIL,
    UPDATE_STATUS_SUCCESS,
    UPDATE_STATUS_FAIL,

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
        payload: err.response.data,
    }))
}

export const verify = (info) => dispatch => {
    axios.post('/register/verify', info)
    .then(res => dispatch({
        type: VERIFY_SUCCESS,
        payload: res.data,
    }))
    .catch(err =>  dispatch({
           type: VERIFY_FAIL,
           payload: err.response.data,
    }));

}
 
export const loadUser = () => dispatch => {
    setToken()
    axios.get('/login')
    .then(res => dispatch({
        type: LOAD_USER_SUCCESS,
        payload: res.data,
    }))
    .catch(err => dispatch({
        type: LOAD_USER_FAIL,
        payload: err.response.data.errors,
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
         payload: err.response.data.errors,
     }));
  
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
    axios.get('/sender/add')
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
     axios.get('/admin/mbr')
     .then(res => dispatch({
         type: MEMBERS_LOAD_SUCCESS,
         payload: res.data,
     }))
     .catch(err => dispatch({
         type: MEMBERS_LOAD_FAIL,
         payload: err.response.data.msg,
     }))
 }

 export const editProfile = (info) => dispatch => {
     setToken()
     axios.post('/edit', info)
     .then(res => dispatch({
         type: EDIT_SUCCESS,
         payload: res.data,
     }))
     .catch(err => dispatch({
         type: EDIT_FAIL,
         payload: err.response.data.msg
     }))
 }
 //send email to reset password 
 export const sendEmail = (info) => dispatch => {
     axios.put('/edit/reset', info)
     .then(res => dispatch({
         type: SEND_EMAIL_SUCCESS,
         payload: res.data,
     }))
     .catch(err => dispatch({
         type: SEND_EMAIL_FAIL,
         payload: err.response.data,
     }))
 }

 export const sendCode = (info) => dispatch => {
     axios.post('/reset', info)
     .then(res => dispatch({
         type: SEND_CODE_SUCCESS,
         payload: res.data,
     }))
     .catch(err => dispatch({
         type: SEND_CODE_FAIL,
         payload: err.response.data
     }))
 }

 // password generation
 export const sendPwd = (info) => dispatch => {
     setToken()
     axios.post('/edit/resetaccount', info)
     .then(res => dispatch({
         type: SEND_PWD_SUCCESS,
         payload: res.data,
     }))
     .catch(err => dispatch({
         type: SEND_PWD_FAIL,
         payload: err.response.data,
     }))
 }
//  export const updatecondition = (info) => dispatch => {
//      axios.put('/admin/:id', info)
//      .then(res => dispatch({
//          type: COND_SUCCESS,
//          payload: res.data,
//      }))
//      .catch(err => dispatch({
//          type: COND_FAIL,
//          payload: err.response.data,
//      }))
//  }

export const updateStatus = (info) => dispatch => {
    setToken()
    axios.put('/admin', info)
    .then(res => dispatch({
        type: UPDATE_STATUS_SUCCESS,
        payload: res.data,
    }))
    .catch(err => dispatch({
        type: UPDATE_STATUS_FAIL,
        payload: err.response.data,
    }))
}

 export const changePWD = (info) => dispatch => {
     setToken();
     axios.put('/edit', info)
     .then(res => dispatch({
         type: PWD_CHANGE_SUCCESS,
         payload: res.data,
     }))
     .catch(err => dispatch({
         type: PWD_CHANGE_FAIL,
         payload: err.response.data,
     }))
 }


