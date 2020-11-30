import React, {useState} from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Container from 'react-bootstrap/Container';
import Card from 'react-bootstrap/Card';
import Jumbotron from 'react-bootstrap/Jumbotron';
import Button from 'react-bootstrap/Button';

const Data3 = () => {
    const[receiver, setReceiver]= useState('');
    const handleChange = e => {
        setReceiver(e.target.value)
    }
    return(
        <form>
            <label><h6>Please add the username of the receiver:</h6></label><br></br>
            <input type='text' onChange={handleChange}/>
        </form>
        
    )
}
export default Data3;