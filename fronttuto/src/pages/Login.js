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
        password:''
    });
    const dispatch = useDispatch();
    const auth = useSelector((state) => state.auth);
    useEffect(() => {
        if(auth.isAuth) {
            history.push("/main");
        }
    }, [auth.isAuth])
    const login = e => {
        e.preventDefault();
        dispatch(loginUser(info));
        setInfo({
            email:'',
            password:''

        })
    };
    const handleChange = e => {
        setInfo({...info,[e.target.name]:e.target.value})
    };
    return(
        <div>
            <NavLogin/>
        
        <Container>
            
            <br></br>
            <div>
            <Jumbotron>
            <form onSubmit={login}>
                
                <div><label style={{color:'green'}}>Email</label><br></br><input type="text" name="email" value={info.email} onChange={handleChange}/></div>
                <div><label style={{color:'green'}}>Password</label><br></br><input type="password" name="password" value={info.passsword} onChange={handleChange}/></div>
                <br></br>
                <Button type="submit" variant='primary'>Connect</Button>
            </form>
            <br></br>
            <Link to='/register'>You don't have an account yet ?</Link>
            
            </Jumbotron>
            </div>
            
        </Container>
        <Footer/>
        </div>
    )
}
export default Login;