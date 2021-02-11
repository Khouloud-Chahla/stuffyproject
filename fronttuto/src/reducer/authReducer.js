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
} from "../actions/types";

let initState = {
    token: localStorage.getItem('token'),
    user: null,
    colis: null,
    allcolis: null,
    receivedP: null,
    isAuth: false,
    verified: false,
    erreurs: null,
    members: null,
    adminloading: null,
    members: null,
    generate: false,
    generated: false,
    edit: false,
    registered: false,
    passchange: false,
    generateCode: false,
    updatereq: false,
};
const AuthReducer = (state = initState, action) => {
    switch (action.type) {
        
        case LOAD_USER_SUCCESS:
           
            return{
                ...state,
                user: action.payload,
                // errors: null,
                isAuth: true,

               
            };
        case PWD_CHANGE_SUCCESS: 
        return{
            ...state,
            user: action.payload,
            // errors: null,
            isAuth: true,
            passchange: true,
        };    
        case EDIT_SUCCESS:
            return{
                ...state,
                isAuth: true,
                edit: true,
               
            } ;   
            
        case SEND_CODE_SUCCESS:
            localStorage.setItem('token', action.payload.token)
            return {
                ...state,
                token: action.payload.token,
                // isAuth: true,
                generateCode: true,
                isAuth: true,
                
            };

        case SEND_EMAIL_SUCCESS:
        case REGISTER_SUCCESS:
            localStorage.setItem('token', action.payload.token)
            return {
                ...state,
                token: action.payload.token,
                // isAuth: true,
                registered: true,
                erreurs: null,
                generate: true,
                edit: false,
            };
            case LOGIN_SUCCESS: 
                 localStorage.setItem('token', action.payload.token)
                return {
                ...state,
                token: action.payload.token,
                isAuth: true,
               
                erreurs: null,
                
              };
            case VERIFY_SUCCESS:
                localStorage.setItem('token', action.payload.token)
                return{
                    ...state,
                    verified: true,
                    isAuth: true,
                    edit: false,
                    registered: false,
                };
            case VERIFY_FAIL:
            
                return{
                    ...state,
                    erreurs: action.payload,
                    edit: false,
                };
            case SEND_PWD_SUCCESS:
                return{
                    ...state,
                    user: action.payload,
                    generated: true,
                    edit: false,
                } ;
            case SEND_PWD_FAIL:
            case PWD_CHANGE_FAIL:    
                return{
                    ...state,
                    erreurs: action.payload,
                    edit: false,
                    passchange: false,
                };

            case LOGIN_FAIL:
            case LOAD_USER_FAIL:
            case REGISTER_FAIL:
            case SEND_EMAIL_FAIL:
            localStorage.removeItem('token')
            return {
                ...state,
                isAuth: false,
                erreurs: action.payload,
                edit: false,
            };
            case COLIS_SUCCESS:    
                return{
                    ...state,
                    colis: action.payload,
                    // errors: null,
                    isAuth: true,
                    edit: false,
                };
                case LOAD_ALL_SUCCESS:
                    return{
                        ...state,
                        allcolis: action.payload,
                        // errors: null,
                        isAuth: true,
                        edit: false,

                    };
                case LOAD_RECEIVED_SUCCESS:
                    return{
                        ...state,
                        receivedP: action.payload,
                        isAuth: true,
                        edit: false,
                    };
                    
            case SEARCH_SUCCESS:
                return{
                    ...state,
                    isAuth: true,
                    members: action.payload,
                    edit: false,
                 };  
            
            case ADMIN_SUCCESS:
                return{
                    ...state,
                    adminloading: action.payload,
                    edit: false,
                };  
                case MEMBERS_LOAD_SUCCESS:
                    return{
                        ...state,
                        members: action.payload,
                        edit: false,
                    };
            case UPDATE_STATUS_SUCCESS:
                return{
                    ...state,
                    updatereq: true,
                }        
                
        case LOGOUT:
            localStorage.removeItem("token");
            return{
                isAuth: false,
                // errors: null,
                user: null,
                colis: null,
                allcolis: null,
                edit: false,
            };
        default:
            return state;
    }
}
export default AuthReducer;