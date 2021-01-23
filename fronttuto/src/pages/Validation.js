import React,{useState, useEffect} from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Container from 'react-bootstrap/Container';
import Card from 'react-bootstrap/Card';
import Jumbotron from 'react-bootstrap/Jumbotron';
import Button from 'react-bootstrap/Button';
import {Link} from 'react-router-dom';
import NavRegister from './NavRegister';
import {verify} from '../actions/authActions';
import { useDispatch, useSelector } from 'react-redux';
import Stuff from './Stuff';

const Validation = ({history}) => {
    const [verif, setVerif] = useState(false);
    const dispatch = useDispatch();
    const auth = useSelector(state => state.auth)
    const [obj, setObj] = useState({code:''})
    useEffect(() => {
        if(auth.verified){
            setVerif(true)
        }
    },[auth.verified])

    const handleChange = e => {
        e.preventDefault()
        setObj({...obj, [e.target.name]:e.target.value})
    }
    const send = () => {
        dispatch(verify(obj))
    }

    return(
        <div> 
            <Container>
                <br></br>
                <br></br>
                {(!verif) && <form><h2 style={{color: 'purple', fontFamily:'cambria'}}>We just sent you the code, check your e-mailbox and enter it below:</h2>
                <br></br><input type='text' width='200px' name='code' onChange={handleChange}/><br></br>
                <br></br><Button onClick={send}>Send</Button></form>}
                {verif && <h2>Your address has been successfully confirmed<br></br><Link to='/main'>Access to your account</Link></h2>}
                <br></br>
                <br></br>
                <Stuff/>
            </Container>
        </div>
    )
}

export default Validation;
