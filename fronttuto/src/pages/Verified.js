import React,{useState, useEffect} from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Container from 'react-bootstrap/Container';
import Card from 'react-bootstrap/Card';
import {Link} from 'react-router-dom';

import {Row, Col} from 'react-bootstrap';
import Jumbotron from 'react-bootstrap/Jumbotron';
import Button from 'react-bootstrap/Button';
import Stuff from './Stuff';

import {verify} from '../actions/authActions';
import {useDispatch, useSelector} from 'react-redux';

const Verified = () => {
    const dispatch = useDispatch();
    const auth = useSelector(state => state.auth);

    useEffect( () => {
        dispatch(verify())
        // if(auth.isAuth){
        //     history.push("/main")
        // }
    },[])
    return(
        <Container>
            <br></br>
            <h2 style={{color:'green', fontFamily:'cambria'}}>Email successfully confirmed</h2>
            <br></br>
            {/* <Link to='/main'>Access</Link> */}
            <Stuff/>
        </Container>
    )
}
export default Verified;