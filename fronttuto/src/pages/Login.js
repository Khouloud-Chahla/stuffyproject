import React, {useState, useEffect} from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import {Link} from 'react-router-dom';
import Jumbotron from 'react-bootstrap/Jumbotron';
import Container from 'react-bootstrap/Container';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import NavLogin from './NavLogin';
import Footer from './Footer';
import { loginUser } from '../actions/authActions';
import { useDispatch, useSelector } from 'react-redux';

const Login = ({ history }) => {

    const[info, setInfo] = useState({
        email:'',
        password:'',
    });
    const [errors, setErrors] = useState(null);
    const [verif, setVerif] = useState(false)

    const dispatch = useDispatch();
    const auth = useSelector((state) => state.auth);

    useEffect(() => {
        if(auth.isAuth) {
            history.push("/main");
        }
        if(auth.erreurs) {
             setErrors(auth.erreurs)
        }
        if(!auth.verified){
            setVerif(true)
        }
    }, [auth.isAuth, auth.erreurs, auth.verified]);

    const login = e => {
        e.preventDefault();
        dispatch(loginUser(info));
        setInfo({
            email:'',
            password:'',

        });
    };
    const handleChange = e => {
        setInfo({...info,[e.target.name]:e.target.value})
    };
    return(
        <div>
            
        
            <Container>
            
            <br></br>
            <div>
            <Jumbotron>
            <form onSubmit={login}>
                <div><label style={{color:'green'}}>Email</label><br></br><input type="text" name="email" value={info.email} onChange={handleChange}/></div>
                <div><label style={{color:'green'}}>Password</label><br></br><input type="password" name="password" value={info.passsword} onChange={handleChange}/></div>
                <br></br>
                <Button type="submit" variant='primary'>Connect</Button>
                <br></br><br></br>
                <div>{ errors && errors.map(el => <><h6 style={{color:'red', fontFamily:'cambria'}}>{el.msg}</h6><br></br><Link to='/edit/reset'>Forgot Password ??</Link><br></br><br></br>
                {verif && <Link to='/register/verify'>Verify your account ?</Link>}</>)}
                <br></br></div>
            </form>
            <br></br>
            <Link to='/register'>You don't have an account yet ?</Link>
            
            </Jumbotron>
            </div>
            
        </Container>
        
        </div>
    )
}
export default Login;