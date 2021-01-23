import React,{useState, useEffect} from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Container from 'react-bootstrap/Container';
import Card from 'react-bootstrap/Card';
import {Row, Col} from 'react-bootstrap';
import Jumbotron from 'react-bootstrap/Jumbotron';
import Button from 'react-bootstrap/Button';
import Footer from './Footer';
import NavLogin from './NavLogin';
import {useDispatch, useSelector} from 'react-redux';
import { sendCode } from '../actions/authActions';

const Codesend = ({history}) => {
    const Dispatch = useDispatch();
    const auth = useSelector(state => state.auth);
    const [info, setInfo] = useState({code: ''})
    const handleChange = e => {
        e.preventDefault()
        setInfo({...info, [e.target.name]: e.target.value})
    }
    const sendcode = () => {
        Dispatch(sendCode(info))
    }
    useEffect(() => {
       if(auth.generateCode){
         history.push('/edit/resetaccount')
       }
    },[auth.generateCode])
    return(
        <Container>
            <br></br>
            <h5>Hello Member, enter the code below to access your account:</h5><br></br>
            <input type='text' name='code' onChange={handleChange}/><br></br><br></br>
            <Button variant='success' onClick={sendcode}>Send</Button>
        </Container>
    )

}

export default Codesend;