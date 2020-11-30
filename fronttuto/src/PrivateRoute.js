import React from'react';
import { Route, Redirect } from'react-router-dom';
//apporter le state
import { useSelector } from 'react-redux';



// il ya des props
const PrivateRoute = ({ component: Component, ...rest }) => {
    const auth = useSelector(state => state.auth) //ds le auth ilya state dureducer auth
    return(
        <Route {...rest} render={(props) => 
            !auth.isAuth ? <Redirect to='/login' /> : <Component {...props} /> 
         }
        />
    )
}

export default PrivateRoute;