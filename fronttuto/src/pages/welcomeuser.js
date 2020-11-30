import React, { useEffect } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import {Link} from 'react-router-dom';
import Jumbotron from 'react-bootstrap/Jumbotron';
import Container from 'react-bootstrap/Container';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import Accordion from 'react-bootstrap/Accordion';
import Carousel from 'react-bootstrap/Carousel';
import AccountCircleIcon from '@material-ui/icons/AccountCircle';
import {useSelector} from 'react-redux';

const Welcome = () => {
    const auth = useSelector((state) => state.auth)
    return(
        <div style={{display:'flex'}}>
                     <AccountCircleIcon style={{fontSize:'xxx-large'}}/>
                     {auth.user && <h3>Welcome <strong style={{color:'blue'}}>{auth.user.firstname}</strong>:</h3>}
         </div>
    )

}
export default Welcome;