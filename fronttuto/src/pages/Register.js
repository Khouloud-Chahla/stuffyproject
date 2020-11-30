import React, {useEffect, useState} from'react';
import {Link} from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import Jumbotron from 'react-bootstrap/Jumbotron';
import Container from 'react-bootstrap/Container';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import Accordion from 'react-bootstrap/Accordion';
import Footer from './Footer';
import NavRegister from './NavRegister';
import AccountBoxIcon from '@material-ui/icons/AccountBox';
import MailOutlineIcon from '@material-ui/icons/MailOutline';
import PhoneAndroidIcon from '@material-ui/icons/PhoneAndroid';
import VpnKeyIcon from '@material-ui/icons/VpnKey';
import { useDispatch, useSelector } from 'react-redux';
import { registerUser } from '../actions/authActions';

const Register = ({ history }) => {
    const[info, setInfo] = useState({
        firstname:'',
        lastname:'',
        address:'',
        phone:'',
        email:'',
        username:'',
        password:'',
    });

    const dispatch = useDispatch();
    const auth = useSelector(state => state.auth) //ds le auth ilya state dureducer auth

    useEffect(() => {
        if(auth.isAuth){
          history.push("/main")
        }
    }, [auth.isAuth])

    const handleChange = e => {
        setInfo({...info, [e.target.name]:e.target.value});

    };
    
    const registerNow = (e) => {
        e.preventDefault();
        dispatch(registerUser(info));
        setInfo({
            firstname:'',
            lastname:'',
            address:'',
            email:'',
            phone:'',
            password:''
        })
    }
    return(
    <Container>

         <NavRegister/>   
         <br></br>
            
            <Card>
            <Card.Header style={{backgroundColor:'white', color:'black'}}>
                  <h6 style={{fontSize:'30px', color:'green'}}>Please add the informations below</h6>
                  <AccountBoxIcon style={{fontSize:'xxx-large'}}/>
            </Card.Header>
                  <Card.Body>

                  <form onSubmit={registerNow}>

                   <div><label style={{color:'green'}}>Firstname</label><br></br><input type="text" name="firstname" value={info.firstname} onChange={handleChange}/></div>
                   <div><label style={{color:'green'}}>Lastname</label><br></br><input type="text" name="lastname" value={info.lastname} onChange={handleChange}/></div>
                   <div><label style={{color:'green'}}>Address</label><br></br><input type="text" name="address" value={info.address} onChange={handleChange}/></div>
                   <div><label style={{color:'green'}}>Phone</label><br></br><PhoneAndroidIcon/><br></br><input type="text" name="phone" value={info.phone} onChange={handleChange}/></div>
                   <div><label style={{color:'green'}}>Email </label><br></br><MailOutlineIcon/><br></br><input type="text" name="email" value={info.email} onChange={handleChange}/></div>
                   <div><label style={{color:'green'}}>Username </label><br></br><input type="text" name="username" value={info.username} onChange={handleChange}/></div>
                   <div><label style={{color:'green'}}>Password</label><br></br><VpnKeyIcon/><br></br><input type="password" name="password" value={info.password} onChange={handleChange}/></div>
                   <br></br>
                   <div><Button type="submit" variant='primary'>Validate</Button></div>
                  </form> 
                  <br></br>
                  <Link to='/login'>Already have an account ?</Link>
                  </Card.Body>
            </Card>
        <br></br>
        <Footer/>
    </Container>

        
    )
}
export default Register;