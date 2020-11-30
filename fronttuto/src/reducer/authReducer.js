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
} from "../actions/types";

let initState = {
    token: localStorage.getItem('token'),
    user: null,
    colis: null,
    allcolis: null,
    receivedP: null,
    isAuth: false,
    errors: null,
    members: null,
    adminloading: null,
    members: null,
};
const AuthReducer = (state = initState, action) => {
    switch (action.type) {
        case LOAD_USER_SUCCESS:
            return{
                ...state,
                user: action.payload,
                errors: null,
                isAuth: true,
            };
        case LOGIN_SUCCESS:    
        case REGISTER_SUCCESS:
            localStorage.setItem('token', action.payload.token)
            return {
                ...state,
                token: action.payload.token,
                isAuth: true,
                errors: null,
            };
            case LOGIN_FAIL:
            case LOAD_USER_FAIL:
            case REGISTER_FAIL:
            localStorage.removeItem('token')
            return {
                ...state,
                isAuth: false,
                errors: action.payload,
            };
            case COLIS_SUCCESS:    
                return{
                    ...state,
                    colis: action.payload,
                    errors: null,
                    isAuth: true,
                };
                case LOAD_ALL_SUCCESS:
                    return{
                        ...state,
                        allcolis: action.payload,
                        errors: null,
                        isAuth: true,

                    };
                case LOAD_RECEIVED_SUCCESS:
                    return{
                        ...state,
                        receivedP: action.payload,
                        isAuth: true,
                    };
                    
            case SEARCH_SUCCESS:
                return{
                    ...state,
                    isAuth: true,
                    members: action.payload,
                 } ;  
            
            case ADMIN_SUCCESS:
                return{
                    ...state,
                    adminloading: action.payload,
                };  
                case MEMBERS_LOAD_SUCCESS:
                    return{
                        ...state,
                        members: action.payload,
                    };
                
        case LOGOUT:
            localStorage.removeItem("token");
            return{
                isAuth: false,
                errors: null,
                user: null,
                colis: null,
                allcolis: null,
            };
        default:
            return state;
    }
}
export default AuthReducer;